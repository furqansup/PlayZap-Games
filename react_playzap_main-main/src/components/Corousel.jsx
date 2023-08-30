import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const Carousel = () => {
  const videos = [
    "/assets/MAIN_Bingo.mp4",
    "/assets/MAIN_match3.mp4",
    "https://files.playzap.games/wp-content/uploads/2022/12/MAIN_solitaire.mp4",
    "https://files.playzap.games/wp-content/uploads/2022/12/MAIN_Pool.mp4",
    "https://files.playzap.games/wp-content/uploads/2022/12/MAIN_Rocket.mp4",
    "https://files.playzap.games/wp-content/uploads/2022/12/MAIN_Dice.mp4",
    "https://files.playzap.games/wp-content/uploads/2022/12/MAIN_21.mp4",
    "https://files.playzap.games/wp-content/uploads/2022/12/MAIN_Block.mp4",
    "https://files.playzap.games/wp-content/uploads/2022/12/MAIN_Bubble.mp4",
    "https://files.playzap.games/wp-content/uploads/2022/12/MAIN_stackball.mp4",
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    console.log("Video", currentVideoIndex);
    const timer = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [currentVideoIndex]);

  const currentVideoSrc = videos[currentVideoIndex];

  // Loading

  const handleLoadingDivClick = (index) => {
    setActiveIndex(index);
    setCurrentVideoIndex(index);
    console.log("clicked");
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    console.log(windowSize);
  }, [windowSize]);

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log("Index", activeIndex);
    const toggleDivs = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 10);
    };

    const interval = setInterval(toggleDivs, 8000);

    return () => clearInterval(interval);
  }, [activeIndex]);
  //

  return (
    <>
      <div className="video-play">
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent bg={"#191f2f"}>
            <ModalHeader>Download Now</ModalHeader>
            <ModalCloseButton />
            <ModalBody className="check">
              {/* <h1>IOS</h1> */}
              <img
                style={{ width: "150px" }}
                src="/assets/qr-code-android.png"
                alt=""
              />
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <video src={currentVideoSrc} autoPlay muted />
        <div className="gradient-overlay"></div>
        <div className="backed-by">
          <p>Backed By</p>
        </div>
        <div className="app-download-video">
          <img
            onClick={onOpen}
            src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63d771f225c16aa756e5dabf_dw-apple.png"
            alt=""
          />
          <img
            onClick={onOpen}
            src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63d77106cdfd66814828c708_dw-google.png"
            alt=""
          />
        </div>
        {/* LoadingProgress  */}
        <div className="loading-container">
          <div className="loading-content">
            <div
              onClick={() => handleLoadingDivClick(0)}
              style={{
                height: `${windowSize.width < 376 ? "40px" : ""}`,
                width: `${windowSize.width < 376 ? "40px" : ""}`,
              }}
              className={`loading-img ${activeIndex === 0 ? "border" : ""}`}
            >
              <img
                src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/647894293dcf473ed499b751_icon_Bingo.png"
                alt=""
              />
            </div>
            <div className="loading">
              <div className="main-container">
                <div className="loadbar">
                  <div className={activeIndex === 0 ? "loadfill" : ""}></div>
                </div>
              </div>
            </div>
            <div>
              <p
                className={`load-p-then ${
                  activeIndex === 0 ? "load-p-now" : ""
                }`}
              >
                Bingo Game
              </p>
            </div>
          </div>
          <div className="loading-content">
            <div
              onClick={() => handleLoadingDivClick(1)}
              style={{
                height: `${windowSize.width < 376 ? "40px" : ""}`,
                width: `${windowSize.width < 376 ? "40px" : ""}`,
              }}
              className={`loading-img ${activeIndex === 1 ? "border" : ""}`}
            >
              <img
                src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/6421854a463f0f8d67fd2cf9_frame%20630007.png"
                alt=""
              />
            </div>
            <div className="loading">
              <div className="main-container">
                <div className="loadbar">
                  <div className={activeIndex === 1 ? "loadfill" : ""}></div>
                </div>
              </div>
            </div>
            <div>
              <p
                className={`load-p-then ${
                  activeIndex === 1 ? "load-p-now" : ""
                }`}
              >
                Match Master
              </p>
            </div>
          </div>
          <div className="loading-content">
            <div
              onClick={() => handleLoadingDivClick(2)}
              style={{
                height: `${windowSize.width < 376 ? "40px" : ""}`,
                width: `${windowSize.width < 376 ? "40px" : ""}`,
              }}
              className={`loading-img ${activeIndex === 2 ? "border" : ""}`}
            >
              <img
                src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/6396f554cf4afbd5683ec8d9_Frame%20630000.png"
                alt=""
              />
            </div>
            <div className="loading">
              <div className="main-container">
                <div className="loadbar">
                  <div className={activeIndex === 2 ? "loadfill" : ""}></div>
                </div>
              </div>
            </div>
            <div>
              <p
                className={`load-p-then ${
                  activeIndex === 2 ? "load-p-now" : ""
                }`}
              >
                Solitaire
              </p>
            </div>
          </div>
          <div className="loading-content">
            <div
              onClick={() => handleLoadingDivClick(3)}
              style={{
                height: `${windowSize.width < 376 ? "40px" : ""}`,
                width: `${windowSize.width < 376 ? "40px" : ""}`,
              }}
              className={`loading-img ${activeIndex === 3 ? "border" : ""}`}
            >
              <img
                src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/6396f5533a8b1188f35c2510_Frame%20630002.png"
                alt=""
              />
            </div>
            <div className="loading">
              <div className="main-container">
                <div className="loadbar">
                  <div className={activeIndex === 3 ? "loadfill" : ""}></div>
                </div>
              </div>
            </div>
            <div>
              <p
                className={`load-p-then ${
                  activeIndex === 3 ? "load-p-now" : ""
                }`}
              >
                Pool Blitz
              </p>
            </div>
          </div>
          <div className="loading-content">
            <div
              onClick={() => handleLoadingDivClick(4)}
              style={{
                height: `${windowSize.width < 376 ? "40px" : ""}`,
                width: `${windowSize.width < 376 ? "40px" : ""}`,
              }}
              className={`loading-img ${activeIndex === 4 ? "border" : ""}`}
            >
              <img
                src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/6392e496fe81aa966621673a_rm-sep-21-1.png"
                alt=""
              />
            </div>
            <div className="loading">
              <div className="main-container">
                <div className="loadbar">
                  <div className={activeIndex === 4 ? "loadfill" : ""}></div>
                </div>
              </div>
            </div>
            <div>
              <p
                className={`load-p-then ${
                  activeIndex === 4 ? "load-p-now" : ""
                }`}
              >
                Rocket Blitz
              </p>
            </div>
          </div>
          <div className="loading-content">
            <div
              onClick={() => handleLoadingDivClick(5)}
              style={{
                height: `${windowSize.width < 376 ? "40px" : ""}`,
                width: `${windowSize.width < 376 ? "40px" : ""}`,
              }}
              className={`loading-img ${activeIndex === 5 ? "border" : ""}`}
            >
              <img
                src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/6396f554a9308905fa5e1159_Frame%20630004.png"
                alt=""
              />
            </div>
            <div className="loading">
              <div className="main-container">
                <div className="loadbar">
                  <div className={activeIndex === 5 ? "loadfill" : ""}></div>
                </div>
              </div>
            </div>
            <div>
              <p
                className={`load-p-then ${
                  activeIndex === 5 ? "load-p-now" : ""
                }`}
              >
                Dice Merge
              </p>
            </div>
          </div>
          <div className="loading-content">
            <div
              onClick={() => handleLoadingDivClick(6)}
              style={{
                height: `${windowSize.width < 376 ? "40px" : ""}`,
                width: `${windowSize.width < 376 ? "40px" : ""}`,
              }}
              className={`loading-img ${activeIndex === 6 ? "border" : ""}`}
            >
              <img
                src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63a53bc46ccbdbe09c59c8e1_21_jack.png"
                alt=""
              />
            </div>
            <div className="loading">
              <div className="main-container">
                <div className="loadbar">
                  <div className={activeIndex === 6 ? "loadfill" : ""}></div>
                </div>
              </div>
            </div>
            <div>
              <p
                className={`load-p-then ${
                  activeIndex === 6 ? "load-p-now" : ""
                }`}
              >
                21 Black Jack
              </p>
            </div>
          </div>
          <div className="loading-content">
            <div
              onClick={() => handleLoadingDivClick(7)}
              style={{
                height: `${windowSize.width < 376 ? "40px" : ""}`,
                width: `${windowSize.width < 376 ? "40px" : ""}`,
              }}
              className={`loading-img ${activeIndex === 7 ? "border" : ""}`}
            >
              <img
                src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/6396f554048e7c6dcca757d0_Frame%20630005.png"
                alt=""
              />
            </div>
            <div className="loading">
              <div className="main-container">
                <div className="loadbar">
                  <div className={activeIndex === 7 ? "loadfill" : ""}></div>
                </div>
              </div>
            </div>
            <div>
              <p
                className={`load-p-then ${
                  activeIndex === 7 ? "load-p-now" : ""
                }`}
              >
                Block Puzzle
              </p>
            </div>
          </div>
          <div className="loading-content">
            <div
              onClick={() => handleLoadingDivClick(8)}
              style={{
                height: `${windowSize.width < 376 ? "40px" : ""}`,
                width: `${windowSize.width < 376 ? "40px" : ""}`,
              }}
              className={`loading-img ${activeIndex === 8 ? "border" : ""}`}
            >
              <img
                src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/6396f554c92e1326c3a9ea62_Frame%20630003.png"
                alt=""
              />
            </div>
            <div className="loading">
              <div className="main-container">
                <div className="loadbar">
                  <div className={activeIndex === 8 ? "loadfill" : ""}></div>
                </div>
              </div>
            </div>
            <div>
              <p
                className={`load-p-then ${
                  activeIndex === 8 ? "load-p-now" : ""
                }`}
              >
                Bubble Shooter
              </p>
            </div>
          </div>
          <div className="loading-content">
            <div
              onClick={() => handleLoadingDivClick(9)}
              style={{
                height: `${windowSize.width < 376 ? "40px" : ""}`,
                width: `${windowSize.width < 376 ? "40px" : ""}`,
              }}
              className={`loading-img ${activeIndex === 9 ? "border" : ""}`}
            >
              <img
                src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/6396f55434667baf06f0a1fb_Frame%20629999.png"
                alt=""
              />
            </div>
            <div className="loading">
              <div className="main-container">
                <div className="loadbar">
                  <div className={activeIndex === 9 ? "loadfill" : ""}></div>
                </div>
              </div>
            </div>
            <div>
              <p
                className={`load-p-then ${
                  activeIndex === 9 ? "load-p-now" : ""
                }`}
              >
                Stackball
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="image-slider-container">
        <div className="image-slide">
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff602306c06bc70c5ecf_14.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff5634667b5672f1775c_13.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff07d53b2c04eab028a9_5.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396fec2f9f3a92723ce6aae_2.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/63bd0ce64ed84a8447a7c166_Screenshot_2023-01-10_at_12.28.42_PM-removebg-preview-p-500.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff965c590e2b42996dac_BNB-CHAIN%201.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396fe9e4d85634fdf7c59a7_1.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff602306c06bc70c5ecf_14.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff5634667b5672f1775c_13.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff07d53b2c04eab028a9_5.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396fec2f9f3a92723ce6aae_2.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/63bd0ce64ed84a8447a7c166_Screenshot_2023-01-10_at_12.28.42_PM-removebg-preview-p-500.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff965c590e2b42996dac_BNB-CHAIN%201.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff602306c06bc70c5ecf_14.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff5634667b5672f1775c_13.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff07d53b2c04eab028a9_5.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396fec2f9f3a92723ce6aae_2.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/63bd0ce64ed84a8447a7c166_Screenshot_2023-01-10_at_12.28.42_PM-removebg-preview-p-500.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff965c590e2b42996dac_BNB-CHAIN%201.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396fe9e4d85634fdf7c59a7_1.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff602306c06bc70c5ecf_14.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff5634667b5672f1775c_13.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff07d53b2c04eab028a9_5.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396fec2f9f3a92723ce6aae_2.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/63bd0ce64ed84a8447a7c166_Screenshot_2023-01-10_at_12.28.42_PM-removebg-preview-p-500.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff965c590e2b42996dac_BNB-CHAIN%201.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396fe9e4d85634fdf7c59a7_1.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff602306c06bc70c5ecf_14.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff5634667b5672f1775c_13.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff07d53b2c04eab028a9_5.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396fec2f9f3a92723ce6aae_2.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/63bd0ce64ed84a8447a7c166_Screenshot_2023-01-10_at_12.28.42_PM-removebg-preview-p-500.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff965c590e2b42996dac_BNB-CHAIN%201.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396fe9e4d85634fdf7c59a7_1.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff602306c06bc70c5ecf_14.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff5634667b5672f1775c_13.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff07d53b2c04eab028a9_5.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396fec2f9f3a92723ce6aae_2.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/63bd0ce64ed84a8447a7c166_Screenshot_2023-01-10_at_12.28.42_PM-removebg-preview-p-500.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff965c590e2b42996dac_BNB-CHAIN%201.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396fe9e4d85634fdf7c59a7_1.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff602306c06bc70c5ecf_14.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff5634667b5672f1775c_13.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff07d53b2c04eab028a9_5.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396fec2f9f3a92723ce6aae_2.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/63bd0ce64ed84a8447a7c166_Screenshot_2023-01-10_at_12.28.42_PM-removebg-preview-p-500.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff965c590e2b42996dac_BNB-CHAIN%201.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396fe9e4d85634fdf7c59a7_1.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff602306c06bc70c5ecf_14.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff5634667b5672f1775c_13.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff07d53b2c04eab028a9_5.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396fec2f9f3a92723ce6aae_2.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/63bd0ce64ed84a8447a7c166_Screenshot_2023-01-10_at_12.28.42_PM-removebg-preview-p-500.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396ff965c590e2b42996dac_BNB-CHAIN%201.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/62724539139292495e68a42e/6396fe9e4d85634fdf7c59a7_1.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Carousel;
