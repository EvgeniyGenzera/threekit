import { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function ColorSlider({ colors, onChange, attrName }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slides, setSlides] = useState([]);

  const updatedColors =
    colors.length > 0 &&
    colors.map((c) => {
      let color;
      switch (c.name) {
        case "Standard White NCS S 0502-Y":
          color = "#E2E2E2";
          break;
        case "Red NCS S4050 R":
          color = "#764D4B";
          break;
        case "Red NCS S2570-Y90R":
          color = "#A84038";
          break;
        case "Red NCS S4550-Y80R":
          color = "#53261F";
          break;
        case "Blue NCS S6020-B10G":
          color = "#596969";
          break;
        case "Blue S6030-R70B":
          color = "#253471";
          break;
        case "Blue NCS S5030-R90B":
          color = "#274997";
          break;
        case "Green NCS S6020-B70G":
          color = "#48686C";
          break;
        case "Green S6020-G30Y":
          color = "#3E5F3C";
          break;
        case "Gray S3500-N":
          color = "#838890";
          break;
        case "Gray NCS S7000-N":
          color = "#5B5B63";
          break;
        case "White NCSS0500 N":
          color = "#5B5B63";
          break;
        case "White":
          color = "#e4e4e4";
          break;
        case "Silver":
          color = "#A9A9A9";
          break;
        case "Black":
          color = "#2C2C2C";
          break;
        default:
          break;
      }
      return {
        name: c.name,
        _id: c._id,
        color,
      };
    });

  useEffect(() => {
    setSlides(updatedColors);
  }, [colors.length]);

  let windowWidth;

  if (process.browser) {
    windowWidth = window.innerWidth;
  }

  const slidesToShow = windowWidth <= 500 ? 2 : 2;

  const handleSlide = (currentSlide) => {
    setCurrentSlide(currentSlide + 1);
    window.configurator.setConfiguration({ Material: slideToShow.name });
  };
  const slideToShow =
    colors.length > 0 &&
    colors.find((slide) => {
      return slide._id === currentSlide;
    });

  return (
    <div className="product__prop__color col-3-5">
      <p className="product__prop__color__text">{attrName}</p>
      <div
        className={`product__prop__color__content ${
          slides.length < 4 ? "jcspa" : ""
        }`}
      >
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
                      onChange({ name: s.name, _id: s._id, attr: attrName })
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
                onChange({ name: v.name, _id: v._id, attr: attrName })
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
