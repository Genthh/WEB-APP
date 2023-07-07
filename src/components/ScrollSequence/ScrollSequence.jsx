import React, { useEffect, useState } from "react";
import "./ScrollSequence.css";
import LoadingBar from "../LoadingBar/LoadingBar";

const ScrollSequence = () => {
  const startImage = 10000;
  const endImage = 11607;
  const pictureCount = endImage - startImage + 1;
  const scrollResolution = 20;
  const photoHeight = 21; 
  const containerHeight = photoHeight * pictureCount;

  const [currentImage, setCurrentImage] = useState(startImage);
  const [preloadedImages, setPreloadedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  useEffect(() => {
    const preloadImages = async () => {
      let loadedImagesCount = 0;
      let lastUpdateTime = Date.now();
      const n = 15;
      const x = 750;
  
      const onLoad = () => {
        loadedImagesCount++;
        if (loadedImagesCount % n === 0 || Date.now() - lastUpdateTime > x) {
          const progress = (loadedImagesCount / pictureCount) * 200;
          setLoadingProgress(progress);
          lastUpdateTime = Date.now();
        }
  
        if (loadedImagesCount === pictureCount) {
          setIsLoading(false);
        }
      };
  
      const images = Array.from({ length: pictureCount }, (_, i) => {
        const img = new Image();
        img.src = `https://rurdimntxnyqvbtlagsj.supabase.co/storage/v1/object/public/photos/Comp_${
          startImage + i
        }.webp`;
        img.onload = onLoad;
        return img;
      });
  
      setPreloadedImages(images);
    };
  
    preloadImages();
  
    let isScrolling = false;
    let requestId = null;
  
    const handleScroll = () => {
      if (!isScrolling) {
        requestId = window.requestAnimationFrame(() => {
          const currentScrollPosition = window.scrollY;
          const imageIndex = Math.floor(currentScrollPosition / scrollResolution);
          setCurrentImage(startImage + imageIndex);
          isScrolling = false;
        });
      }
      isScrolling = true;
    };
  
    const cancelScrollAnimation = () => {
      if (requestId) {
        window.cancelAnimationFrame(requestId);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelScrollAnimation();
    };
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";
  }, [isLoading]);
  
  

  return (
    <div className="fresh" style={{ height: `${containerHeight}px` }}>
      {isLoading ? (
        // <div className="loading-bar">
        //   <div
        //     className="loading-progress"
        //     // 
        //   ></div>
        // </div>
        <LoadingBar style={{ width: `${loadingProgress}%` }}/>
      ) : (
        <div className="container">
          {preloadedImages.map((img, i) => (
            <img
              key={i}
              src={img.src}
              className={`animated ${
                i === currentImage - startImage ? "active" : ""
              }`}
              alt="scrollsequence"
            />
          ))}

          {/* {currentImage >= 10330 && currentImage <= 10560 && (
            <div className="border-container">
              <div
                className={`border ${currentImage === 10560 ? "fade-in" : ""}`}
              >
                <h1>Introduction</h1>
                <p>
                  Welcome to the Digital Generation Club! Become a DGC member
                  and unlock the door to endless possibilities to shape and
                  build the future of Web3!
                </p>
              </div>
            </div>
          )}

          {currentImage >= 10340 && currentImage <= 10570 && (
            <div className="borderTwo-container">
              <div className="border-two">
                <h1>Mission</h1>
                <p>
                  DGC is a private club of individuals who are passionate about
                  using the third generation of web technologies to drive
                  innovation and change!
                </p>
              </div>
            </div>
          )}
          {currentImage >= 10350 && currentImage <= 10580 && (
            <div className="borderThree-container">
              <div className="border-three">
                <h1>Aim</h1>
                <p>
                  Aim The Club aims to become the pinnacle of wisdom and
                  prosperity on Web3. Everything from mission to utilities is
                  built with the thought of giving the maximum amount of value
                  towards the DGC members.
                </p>
              </div>
            </div>
          )}
          {currentImage >= 10360 && currentImage <= 10590 && (
            <div className="borderFour-container">
              <div className="border-four">
                <h1>Vision</h1>
                <p>
                  Our vision is to create the most exclusive and valuable club
                  dedicated to Web3 builders, where members can connect,
                  collaborate, and share knowledge and success with aspiring
                  like-minded people while growing both personally and
                  professionally.
                </p>
              </div>
            </div>
          )}  */}
          {/* <div> */}
            {/* {currentImage >= 10816 && currentImage <= 10819 && (
              <div className="card">
                <div className="card-pill">
                  <h1>Vision</h1>
                  <p>
                    Our vision is to create the most exclusive and valuable club
                    dedicated to Web3 builders, where members can connect,
                    collaborate, and share knowledge and success with aspiring
                    like-minded people while growing both personally and
                    professionally.
                  </p>
                </div>
              </div>
            )} */}
            {/* {currentImage >= 10840 && currentImage <= 10843 && (
              <div className="card">
                <div className="card-pill">
                  <h1>Vision</h1>
                  <p>
                    Our vision is to create the most exclusive and valuable club
                    dedicated to Web3 builders, where members can connect,
                    collaborate, and share knowledge and success with aspiring
                    like-minded people while growing both personally and
                    professionally.
                  </p>
                </div>
              </div>
            )}
          </div> */}

          {/* {currentImage >= 10858 && currentImage <= 10861 && (
            <div className="card">
              <div className="card-pill">
                <h1>Vision</h1>
                <p>
                  Our vision is to create the most exclusive and valuable club
                  dedicated to Web3 builders, where members can connect,
                  collaborate, and share knowledge and success with aspiring
                  like-minded people while growing both personally and
                  professionally.
                </p>
              </div>
            </div>
          )} */}
          {/* {currentImage >= 10882 && currentImage <= 10885 && (
            <div className="card">
              <div className="card-pill">
                <h1>Vision</h1>
                <p>
                  Our vision is to create the most exclusive and valuable club
                  dedicated to Web3 builders, where members can connect,
                  collaborate, and share knowledge and success with aspiring
                  like-minded people while growing both personally and
                  professionally.
                </p>
              </div>
            </div>
          )}
          {currentImage >= 10900 && currentImage <= 10903 && (
            <div className="card">
              <div className="card-pill">
                <h1>Vision</h1>
                <p>
                  Our vision is to create the most exclusive and valuable club
                  dedicated to Web3 builders, where members can connect,
                  collaborate, and share knowledge and success with aspiring
                  like-minded people while growing both personally and
                  professionally.
                </p>
              </div>
            </div>
          )}
          {currentImage >= 10919 && currentImage <= 10924 && (
            <div className="card">
              <div className="card-pill">
                <h1>Vision</h1>
                <p>
                  Our vision is to create the most exclusive and valuable club
                  dedicated to Web3 builders, where members can connect,
                  collaborate, and share knowledge and success with aspiring
                  like-minded people while growing both personally and
                  professionally.
                </p>
              </div>
            </div>
          )}
          {currentImage >= 10940 && currentImage <= 10944 && (
            <div className="card">
              <div className="card-pill">
                <h1>Vision</h1>
                <p>
                  Our vision is to create the most exclusive and valuable club
                  dedicated to Web3 builders, where members can connect,
                  collaborate, and share knowledge and success with aspiring
                  like-minded people while growing both personally and
                  professionally.
                </p>
              </div>
            </div>
          )}*/}
          {currentImage >= 11344 && currentImage <= 11414 && (
            <div className="fre">
              <div className="fre-pill">
                <h1>VALUES</h1>
              </div>
            </div>
          )} 
        </div>
      )}
    </div>
  );
};

export default ScrollSequence;
