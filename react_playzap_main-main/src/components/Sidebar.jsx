import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const currentPathname = router.pathname;
    const selectedItemIndex = findSelectedItemIndex(currentPathname);
    setSelectedItem(selectedItemIndex);
    setIsLoaded(true);
  }, [router.pathname]);

  const findSelectedItemIndex = (pathname) => {
    const linkPaths = [
      "/",
      "/company",
      "/ranks",
      "https://wallet.playzap.games/login",
      "/pzp",
      "/help",
    ];
    const selectedItemIndex = linkPaths.findIndex((path) => path === pathname);
    return selectedItemIndex;
  };

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="sidebar">
      <Link href="/" className="link">
        <div
          className={`sidebar-item ${
            isLoaded && selectedItem === 0 ? "selected" : ""
          }`}
          onClick={() => handleItemClick(0)}
        >
          <img
            src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63a5894f581f4d83c3287d67_Frame%20630042.png"
            alt="Home"
          />
          <span>Home</span>
        </div>
      </Link>
      <Link href="/company" className="link">
        <div
          className={`sidebar-item ${
            isLoaded && selectedItem === 1 ? "selected" : ""
          }`}
          onClick={() => handleItemClick(1)}
        >
          <img
            src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63a5899630882681ac121794_Frame%20630043.png"
            alt="Company"
          />
          <span>Company</span>
        </div>
      </Link>
      <Link href="/ranks" className="link">
        <div
          className={`sidebar-item ${
            isLoaded && selectedItem === 2 ? "selected" : ""
          }`}
          onClick={() => handleItemClick(2)}
        >
          <img
            src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/642a8168e48f6a2e832ecb92_Leaderboard_1.png"
            alt="Ranks"
          />
          <span>Ranks</span>
        </div>
      </Link>
      <Link
        href={"https://wallet.playzap.games/login"}
        target="_blank"
        className="link"
      >
        <div
          className={`sidebar-item ${
            isLoaded && selectedItem === 3 ? "selected" : ""
          }`}
          onClick={() => handleItemClick(0)}
        >
          <img
            src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/6492ac78d771e6ed62386723_Wallet-btn-64.png"
            alt="Wallets"
          />
          <span>Wallets</span>
        </div>
      </Link>
      <Link href="/pzp" className="link">
        <div
          className={`sidebar-item ${
            isLoaded && selectedItem === 4 ? "selected" : ""
          }`}
          onClick={() => handleItemClick(4)}
        >
          <img
            src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63a589a876dc2e7622ab5ea2_Frame%20630044.png"
            alt="$PZP"
          />
          <span>$PZP</span>
        </div>
      </Link>
      <Link href="/help" className="link">
        <div
          className={`sidebar-item ${
            isLoaded && selectedItem === 5 ? "selected" : ""
          }`}
          onClick={() => handleItemClick(5)}
        >
          <img
            src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63a58b4fd6529848453d46e7_Frame%20630045.png"
            alt="Help"
          />
          <span>Help</span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
