import { useState, useEffect } from "react";

export default function TextSlider({ types, onTypeChange }) {
  const [currentSlide, setCurrentSlide] = useState(1);

  const defaultSlide = 1;

  const handlePrev = (current) => {
    current -= 1;
    setCurrentSlide(current);
    onTypeChange(
      types
      .find((slide) => {
        return slide._id === currentSlide;
      })
    );
  };

  const handleNext = (current) => {
    current += 1;
    setCurrentSlide(current);
    onTypeChange(
      types
      .find((slide) => {
        return slide._id === currentSlide;
      })
    );
  };

  const slideToShow =
    types.length > 0 &&
    types
      .find((slide) => {
        return slide._id === currentSlide;
      });

  useEffect(() => {
    onTypeChange(slideToShow);
  });

  return (
    <div className="product__prop__arrow col-3-5">
      <p className="product__prop__color__text">Shoe Section</p>
      <div className="product__prop__arrow__main">
        <p
          className={`product__prop__arrow__main__color ${
            currentSlide - 1 < defaultSlide ? "disabled" : ""
          }`}
          onClick={() => handlePrev(currentSlide)}
        >
          <img
            src="/static/images/arrow.svg"
            className="product__prop__arrow__main__color__left"
          />
        </p>
        <p className="product__prop__arrow__main__text">{slideToShow.name}</p>
        <p
          className={`product__prop__arrow__main__color ${
            currentSlide + 1 > types.length ? "disabled" : ""
          }`}
          onClick={() => handleNext(currentSlide)}
        >
          <img
            src="/static/images/arrow.svg"
            className="product__prop__arrow__main__color__right"
          />
        </p>
      </div>
    </div>
  );
}
