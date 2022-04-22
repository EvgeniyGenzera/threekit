import { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function ColorSlider({ colors, onColorChange }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slides, setSlides] = useState([]);

  const updatedColors =
    colors.length > 0 &&
    colors.map((c) => {
      let color;
      switch (c.name) {
        case "White":
          color = "#E2E2E2";
          break;
        case "Black":
          color = "#252530";
          break;
        case "Charcoal":
          color = "#151519";
          break;
        case "Navy":
          color = "#263267";
          break;
        case "Red":
          color = "#A1120C";
          break;
        case "Orange":
          color = "#DA561F";
          break;
        case "Yellow":
          color = "#E6CB03";
          break;
        case "Green":
          color = "#47A430";
          break;
        case "Teal":
          color = "#1D7975";
          break;
        case "Light-Blue":
          color = "#274997";
          break;
        case "Blue":
          color = "#0D52C1";
          break;
        case "Purple":
          color = "#714685";
          break;
        case "Pink":
          color = "#ffc0cb";
          break;
        default:
          break;
      }
      return {
        name: c.name,
        assetId: c.assetId,
        color,
      };
    });

  useEffect(() => {
    setSlides(updatedColors);
  }, [colors]);

  let windowWidth;

  if (process.browser) {
    windowWidth = window.innerWidth;
  }

  const slidesToShow = windowWidth <= 500 ? 2 : 3;

  const slideToShow =
    colors.length > 0 &&
    colors.find((slide) => {
      return slide.id === currentSlide;
    });

  return (
    <div className="product__prop__color">
      <p className="product__prop__color__text">Color</p>
      <div className="product__prop__color__content">
        {slides.length > 3 && (
          <CarouselProvider
            totalSlides={slides.length}
            visibleSlides={slidesToShow}
          >
            <Slider>
              {slides.map((s) => (
                <Slide>
                  <a
                    onClick={() =>
                      onColorChange({ name: s.name, assetId: s.assetId })
                    }
                  >
                    <p
                      key={s.name}
                      style={{
                        background: s.color,
                        height: "46px",
                        width: "46px",
                        borderRadius: "50%",
                      }}
                      className="product__prop__arrow__main__text color-circle"
                    ></p>
                  </a>
                </Slide>
              ))}
            </Slider>
            <ButtonBack>
              <p className="product__prop__arrow__main__color">
                <img
                  src="/static/images/arrow.svg"
                  className="product__prop__arrow__main__color__left"
                />
              </p>
            </ButtonBack>
            <ButtonNext>
              <p className="product__prop__arrow__main__color">
                <img
                  src="/static/images/arrow.svg"
                  className="product__prop__arrow__main__color__right"
                />
              </p>
            </ButtonNext>
          </CarouselProvider>
        )}
        {slides.length < 4 &&
          slides.map((v) => (
            <a
              onClick={() =>
                onColorChange({ name: v.name, assetId: v.assetId })
              }
            >
              <p
                key={v}
                style={{
                  background: v.color,
                  height: "46px",
                  width: "46px",
                  borderRadius: "50%",
                }}
                className="product__prop__arrow__main__text color-circle"
              ></p>
            </a>
          ))}
      </div>
    </div>
  );
}
