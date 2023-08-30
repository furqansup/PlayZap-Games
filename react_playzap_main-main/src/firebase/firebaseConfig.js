import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";

const firebaseConfigGoogle = {
  apiKey: process.env.API_KEY,
  authDomain: "auth.playzap.games",
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const firebaseConfigApple = {
  apiKey: process.env.API_KEY,
  authDomain: "pc-api-8080383964778552034-169.firebaseapp.com",
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const googleApp = initializeApp(firebaseConfigGoogle, "googleApp");
const appleApp = initializeApp(firebaseConfigApple, "appleApp");

const googleAuth = getAuth(googleApp);
const appleAuth = getAuth(appleApp);

const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider("apple.com");

export { googleAuth, appleAuth, googleProvider, appleProvider };