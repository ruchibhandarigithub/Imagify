import React, { useEffect, useState, useRef } from "react";

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const timeOutRef = useRef(null);

  useEffect(() => {
    clearTimeout(timeOutRef.current);

    if (autoPlay) {
      timeOutRef.current = setTimeout(() => {
        slideRight();
      }, 1500);
    }

    return () => {
      clearTimeout(timeOutRef.current);
    };
  }, [autoPlay, current]);

  const slideRight = () => {
    setCurrent((prevCurrent) => (prevCurrent === images.length - 1 ? 0 : prevCurrent + 1));
  };

  const slideLeft = () => {
    setCurrent((prevCurrent) => (prevCurrent === 0 ? images.length - 1 : prevCurrent - 1));
  };

  return (
    <div className="carousel">
      <div
        className="carousel_wrapper"
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOutRef.current);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === current
                ? "carousel_card carousel_card-active"
                : "carousel_card"
            }
          >
            <img className="card_image" src={image.urls.full} alt="" />
            <div className="card_overlay"></div>
          </div>
        ))}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination">
          {images.map((_, index) => (
            <div
              key={index}
              className={
                index === current
                  ? "pagination_dot pagination_dot-active"
                  : "pagination_dot"
              }
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
