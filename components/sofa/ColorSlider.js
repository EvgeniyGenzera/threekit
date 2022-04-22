import { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function ColorSlider({ colors, onChange, mat }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slides, setSlides] = useState([]);

  const filterColors = (filter) => {
    const updatedColors =
      colors.length > 0 &&
      colors.map((c) => {
        let color;
        let type;
        switch (c.name) {
          case "Grey":
            color = "#A6A6A6";
            type = "Fabric";
            break;
          case "Purple":
            color = "#714685";
            type = "Fabric";
            break;
          case "Teal":
            color = "#4A827F";
            type = "Fabric";
            break;
          case "Yellow":
            color = "#BC8E3D";
            type = "Fabric";
            break;
          case "Black":
            color = "#252530";
            type = "Leather";
            break;
          case "Brown":
            color = "#BC8E3D";
            type = "Leather";
            break;
          default:
            break;
        }
        return {
          name: c.name,
          _id: c._id,
          color,
          type,
        };
      }).filter(c => c.type === filter);
      return updatedColors;
  }


  useEffect(() => {
    setSlides(filterColors(mat));
  }, [colors.length, mat]);

  let windowWidth;

  if (process.browser) {
    windowWidth = window.innerWidth;
  }

  const slidesToShow = windowWidth <= 500 ? 2 : 3;

  const slideToShow =
    colors.length > 0 &&
    colors.find((slide) => {
      return slide._id === currentSlide;
    });

  return (
    <div className="product__prop__color">
      <p className="product__prop__color__text">Color</p>
      <div className={`product__prop__color__content ${slides.length < 4 ? 'jcspa' : ''}`}>
        {slides.length > 3 && (
          <CarouselProvider
            totalSlides={slides.length}
            visibleSlides={slidesToShow}
          >
            <Slider>
              {slides.map((s) => (
                <Slide>
                  <a onClick={() => onChange({ name: s.name, _id: s._id })}>
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
            <a onClick={() => onChange({ name: v.name, _id: v._id })}>
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
