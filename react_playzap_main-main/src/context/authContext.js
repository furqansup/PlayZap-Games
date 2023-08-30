import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import {
  googleProvider,
  appleProvider,
  googleAuth,
  appleAuth,
} from "../firebase/firebaseConfig";
import { useRouter } from "next/router";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [apiAuthToken, setApiAuthToken] = useState(null);
  const [playZapProfile, setPlayZapProfile] = useState("");
  const [existingUser, setExistingUser] = useState(false);
  const router = useRouter();

  const signInWithApple = () => {
    signInWithPopup(appleAuth, appleProvider)
      .then((result) => {
        const user = result.user;
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signInWithGoogle = () => {
    signInWithPopup(googleAuth, googleProvider)
      .then((result) => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logOutUser = async () => {
    const auth =
      currentUser.providerData[0].providerId === "google.com"
        ? googleAuth
        : appleAuth;
    await signOut(auth);
    router.push("/login");
  };

  const tokenGenerationApple = async (user) => {
    const uid = user.uid;
    const token = user.stsTokenManager.accessToken;
    const sessionToken = sessionStorage.getItem("token");
    const isDeveloper = sessionStorage.getItem("isDeveloper");
    const apiBase = isDeveloper
      ? process.env.BASE_URL_STAGING
      : process.env.BASE_URL;
    if (sessionToken) {
      isDeveloper ? console.log(sessionToken) : null;
      setApiAuthToken(sessionToken);
      getUserData(sessionToken);
      return;
    }

    let ApiToken = "";

    const response = await fetch(`${apiBase}/api/logins/ap`, {
      method: "PATCH",
      body: JSON.stringify({
        logins: {
          uid: uid,
          token: token,
          platform: "WEB",
        },
      }),
      headers: {
        "Content-type": "application/json",
        frontend: 20,
      },
    })
      .then((data) => {
        ApiToken = data.headers.get("token").slice(5);
        return data.json();
      })
      .then((data) => {
        setExistingUser(data.data.existing_user);
        return data;
      })
      .catch((error) => {
        console.log(error);
      });

    sessionStorage.setItem("token", ApiToken);
    setApiAuthToken(ApiToken);
    getUserData(ApiToken);
  };

  const tokenGeneration = async (user) => {
    const uid = user.uid;
    const token = user.stsTokenManager.accessToken;
    const sessionToken = sessionStorage.getItem("token");
    const isDeveloper = sessionStorage.getItem("isDeveloper");
    const apiBase = isDeveloper
      ? process.env.BASE_URL_STAGING
      : process.env.BASE_URL;
    if (sessionToken) {
      isDeveloper ? console.log(sessionToken) : null;
      setApiAuthToken(sessionToken);
      getUserData(sessionToken);
      return;
    }

    let ApiToken = "";

    const response = await fetch(`${apiBase}/api/logins/gl`, {
      method: "PATCH",
      body: JSON.stringify({
        logins: {
          uid: uid,
          token: token,
          platform: "WEB",
        },
      }),
      headers: {
        "Content-type": "application/json",
        frontend: 20,
      },
    })
      .then((data) => {
        ApiToken = data.headers.get("token").slice(5);
        return data.json();
      })
      .then((data) => {
        setExistingUser(data.data.existing_user);
        return data;
      })
      .catch((error) => {
        console.log(error);
      });

    sessionStorage.setItem("token", ApiToken);
    setApiAuthToken(ApiToken);
    getUserData(ApiToken);
  };

  const getUserData = (token) => {
    const isDeveloper = sessionStorage.getItem("isDeveloper");
    const apiBase = isDeveloper
      ? process.env.BASE_URL_STAGING
      : process.env.BASE_URL;
    fetch(`${apiBase}/api/users`, {
      method: "GET",
      headers: {
        Authorization: token,
        Web: "FRONTEND",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem("rlyBalance", data.data.virtual2.toFixed(2));
        setPlayZapProfile(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const unsubscribeGoogle = onAuthStateChanged(googleAuth, (user) => {
      setCurrentUser(user);
      user && tokenGeneration(user);
    });

    const unsubscribeApple = onAuthStateChanged(appleAuth, (user) => {
      setCurrentUser(user);
      user && tokenGenerationApple(user);
    });

    return () => {
      unsubscribeGoogle();
      unsubscribeApple();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signInWithGoogle,
        currentUser,
        logOutUser,
        setCurrentUser,
        playZapProfile,
        apiAuthToken,
        getUserData,
        signInWithApple,
        existingUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
