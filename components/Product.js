import { useState } from "react";

export default function Product({ product }) {
  const [type, setType] = useState(false);
  const enter = () => setType(true);
  const leave = () => setType(false);
  return (
    <div
      onMouseEnter={enter}
      onMouseLeave={leave}
      style={{
        backgroundColor: type ? product.bgColor : "transparent",
        transition: "all .3s ease-in-out",
      }}
      className="demo__content__item"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-offset="200"
    >
      <img
        src={
          !type
            ? `http://54.208.102.213:1337${product.colorlessIcon.url}`
            : `http://54.208.102.213:1337${product.colorIcon.url}`
        }
        alt="bath"
      />
      <p className="demo__content__item__text">{product.title}</p>
    </div>
  );
}
