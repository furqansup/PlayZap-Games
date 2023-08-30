// import React, { useState, useEffect } from "react";

// const LoadingProgress = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [windowSize, setWindowSize] = useState({
//     width: 0,
//     height: 0,
//   });

//   const handleResize = () => {
//     setWindowSize({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });
//   };

//   useEffect(() => {
//     console.log(windowSize);
//   }, [windowSize]);

//   useEffect(() => {
//     setWindowSize({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const toggleDivs = () => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % 10);
//     };

//     const interval = setInterval(toggleDivs, 8000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <div className="loading-container">
//         <div className="loading-content">
//           <div
//             style={{
//               height: `${windowSize.width < 376 ? "40px" : ""}`,
//               width: `${windowSize.width < 376 ? "40px" : ""}`,
//             }}
//             className={`loading-img ${activeIndex === 0 ? "border" : ""}`}
//           >
//             <img
//               src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/647894293dcf473ed499b751_icon_Bingo.png"
//               alt=""
//             />
//           </div>
//           <div className="loading">
//             <div className="main-container">
//               <div className="loadbar">
//                 <div className={activeIndex === 0 ? "loadfill" : ""}></div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <p
//               className={`load-p-then ${activeIndex === 0 ? "load-p-now" : ""}`}
//             >
//               Bingo Game
//             </p>
//           </div>
//         </div>
//         <div className="loading-content">
//           <div
//             style={{
//               height: `${windowSize.width < 376 ? "40px" : ""}`,
//               width: `${windowSize.width < 376 ? "40px" : ""}`,
//             }}
//             className={`loading-img ${activeIndex === 1 ? "border" : ""}`}
//           >
//             <img
//               src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/6421854a463f0f8d67fd2cf9_frame%20630007.png"
//               alt=""
//             />
//           </div>
//           <div className="loading">
//             <div className="main-container">
//               <div className="loadbar">
//                 <div className={activeIndex === 1 ? "loadfill" : ""}></div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <p
//               className={`load-p-then ${activeIndex === 1 ? "load-p-now" : ""}`}
//             >
//               Match Master
//             </p>
//           </div>
//         </div>
//         <div className="loading-content">
//           <div style={{
//               height: `${windowSize.width < 376 ? "40px" : ""}`,
//               width: `${windowSize.width < 376 ? "40px" : ""}`,
//             }} className={`loading-img ${activeIndex === 2 ? "border" : ""}`}>
//             <img
//               src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/6396f554cf4afbd5683ec8d9_Frame%20630000.png"
//               alt=""
//             />
//           </div>
//           <div className="loading">
//             <div className="main-container">
//               <div className="loadbar">
//                 <div className={activeIndex === 2 ? "loadfill" : ""}></div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <p
//               className={`load-p-then ${activeIndex === 2 ? "load-p-now" : ""}`}
//             >
//               Solitaire
//             </p>
//           </div>
//         </div>
//         <div className="loading-content">
//           <div style={{
//               height: `${windowSize.width < 376 ? "40px" : ""}`,
//               width: `${windowSize.width < 376 ? "40px" : ""}`,
//             }} className={`loading-img ${activeIndex === 3 ? "border" : ""}`}>
//             <img
//               src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/6396f5533a8b1188f35c2510_Frame%20630002.png"
//               alt=""
//             />
//           </div>
//           <div className="loading">
//             <div className="main-container">
//               <div className="loadbar">
//                 <div className={activeIndex === 3 ? "loadfill" : ""}></div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <p
//               className={`load-p-then ${activeIndex === 3 ? "load-p-now" : ""}`}
//             >
//               Pool Blitz
//             </p>
//           </div>
//         </div>
//         <div className="loading-content">
//           <div style={{
//               height: `${windowSize.width < 376 ? "40px" : ""}`,
//               width: `${windowSize.width < 376 ? "40px" : ""}`,
//             }} className={`loading-img ${activeIndex === 4 ? "border" : ""}`}>
//             <img
//               src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/6392e496fe81aa966621673a_rm-sep-21-1.png"
//               alt=""
//             />
//           </div>
//           <div className="loading">
//             <div className="main-container">
//               <div className="loadbar">
//                 <div className={activeIndex === 4 ? "loadfill" : ""}></div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <p
//               className={`load-p-then ${activeIndex === 4 ? "load-p-now" : ""}`}
//             >
//               Rocket Blitz
//             </p>
//           </div>
//         </div>
//         <div className="loading-content">
//           <div style={{
//               height: `${windowSize.width < 376 ? "40px" : ""}`,
//               width: `${windowSize.width < 376 ? "40px" : ""}`,
//             }} className={`loading-img ${activeIndex === 5 ? "border" : ""}`}>
//             <img
//               src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/6396f554a9308905fa5e1159_Frame%20630004.png"
//               alt=""
//             />
//           </div>
//           <div className="loading">
//             <div className="main-container">
//               <div className="loadbar">
//                 <div className={activeIndex === 5 ? "loadfill" : ""}></div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <p
//               className={`load-p-then ${activeIndex === 5 ? "load-p-now" : ""}`}
//             >
//               Dice Merge
//             </p>
//           </div>
//         </div>
//         <div className="loading-content">
//           <div style={{
//               height: `${windowSize.width < 376 ? "40px" : ""}`,
//               width: `${windowSize.width < 376 ? "40px" : ""}`,
//             }} className={`loading-img ${activeIndex === 6 ? "border" : ""}`}>
//             <img
//               src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/63a53bc46ccbdbe09c59c8e1_21_jack.png"
//               alt=""
//             />
//           </div>
//           <div className="loading">
//             <div className="main-container">
//               <div className="loadbar">
//                 <div className={activeIndex === 6 ? "loadfill" : ""}></div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <p
//               className={`load-p-then ${activeIndex === 6 ? "load-p-now" : ""}`}
//             >
//               21 Black Jack
//             </p>
//           </div>
//         </div>
//         <div className="loading-content">
//           <div style={{
//               height: `${windowSize.width < 376 ? "40px" : ""}`,
//               width: `${windowSize.width < 376 ? "40px" : ""}`,
//             }} className={`loading-img ${activeIndex === 7 ? "border" : ""}`}>
//             <img
//               src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/6396f554048e7c6dcca757d0_Frame%20630005.png"
//               alt=""
//             />
//           </div>
//           <div className="loading">
//             <div className="main-container">
//               <div className="loadbar">
//                 <div className={activeIndex === 7 ? "loadfill" : ""}></div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <p
//               className={`load-p-then ${activeIndex === 7 ? "load-p-now" : ""}`}
//             >
//               Block Puzzle
//             </p>
//           </div>
//         </div>
//         <div className="loading-content">
//           <div style={{
//               height: `${windowSize.width < 376 ? "40px" : ""}`,
//               width: `${windowSize.width < 376 ? "40px" : ""}`,
//             }} className={`loading-img ${activeIndex === 8 ? "border" : ""}`}>
//             <img
//               src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/6396f554c92e1326c3a9ea62_Frame%20630003.png"
//               alt=""
//             />
//           </div>
//           <div className="loading">
//             <div className="main-container">
//               <div className="loadbar">
//                 <div className={activeIndex === 8 ? "loadfill" : ""}></div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <p
//               className={`load-p-then ${activeIndex === 8 ? "load-p-now" : ""}`}
//             >
//               Bubble Shooter
//             </p>
//           </div>
//         </div>
//         <div className="loading-content">
//           <div style={{
//               height: `${windowSize.width < 376 ? "40px" : ""}`,
//               width: `${windowSize.width < 376 ? "40px" : ""}`,
//             }} className={`loading-img ${activeIndex === 9 ? "border" : ""}`}>
//             <img
//               src="https://uploads-ssl.webflow.com/622b71d5703c41011dd1c3ac/6396f55434667baf06f0a1fb_Frame%20629999.png"
//               alt=""
//             />
//           </div>
//           <div className="loading">
//             <div className="main-container">
//               <div className="loadbar">
//                 <div className={activeIndex === 9 ? "loadfill" : ""}></div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <p
//               className={`load-p-then ${activeIndex === 9 ? "load-p-now" : ""}`}
//             >
//               Stackball
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoadingProgress;
