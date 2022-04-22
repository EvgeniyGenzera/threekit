import { useState, useEffect } from "react";

export default function TextSlider({ types, onChange, mat }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slide, setSlide] = useState({});

  const setDefault = () => {
    if (slide.name == "Leather") {
      window.configurator.setConfiguration({
        Material: "Fabric",
        "Material Color": "Grey",
      });
    } else {
      window.configurator.setConfiguration({
        Material: "Leather",
        "Material Color": "Black",
      });
    }
  };

  const defaultSlide = 1;

  const handlePrev = (current) => {
    current -= 1;
    setCurrentSlide(current);
    onChange(
      types.find((slide) => {
        return slide._id === current;
      })
    );
    setDefault();
  };

  const handleNext = (current) => {
    current += 1;
    setCurrentSlide(current);
    onChange(
      types.find((slide) => {
        return slide._id === current;
      })
    );
    setDefault();
  };

  useEffect(() => {
    const slideToShow =
      types.length > 0 &&
      types.find((slide) => {
        return slide._id === currentSlide;
      });
    setSlide(slideToShow);
  });

  useEffect(() => {
    setCurrentSlide(defaultSlide);
  }, []);

  console.log(slide);

  return (
    <div className="product__prop__arrow col-2-3">
      <p className="product__prop__color__text">Couch Material</p>
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
        <p className="product__prop__arrow__main__text">{slide.name}</p>
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
