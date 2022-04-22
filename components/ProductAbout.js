import marked from "marked";
import { useEffect } from "react";

export default function ProductAbout({ about, slug }) {
  useEffect(() => {
    const $style = document.createElement("style");
    document.head.appendChild($style);
    $style.innerHTML = `.model__info h2:first-of-type {
      font-size: 54px;
      line-height: 70px;
      color: #1C4748;
    }
    .model__info h2 {
      font-size: 36px;
      line-height: 45px;
      color: #0E2526;
    }
    .model__info p {
      font-size: 18px;
      line-height: 32px;
      color: #2A3A3C;
    }
    @media (max-width: 414px) {
      .model__info h2:first-of-type {
        font-size: 38px;
        line-height: 50px;
        color: #1C4748;
      }
      .model__info h2 {
        font-size: 28px;
        line-height: 35px;
        color: #0E2526;
      }
      .model__info p {
        font-size: 14px;
        line-height: 28px;
        color: #2A3A3C;
      }
    }
    @media (max-width: 768px) {
      .model__info h2:first-of-type {
        font-size: 38px;
        line-height: 50px;
        color: #1C4748;
      }
      .model__info h2 {
        font-size: 28px;
        line-height: 35px;
        color: #0E2526;
      }
      .model__info p {
        font-size: 16px;
        line-height: 30px;
        color: #2A3A3C;
      }
    }
    `;
  });
  return (
    <div className="container">
      <div className="model">
        <div className="model__image">
          <div className="model__image__product">
            <video style={{ width: "100%" }} autoPlay loop>
              <source src={`/static/${slug}.mp4`} type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div className="model__info">
          <div dangerouslySetInnerHTML={{ __html: marked(about.text) }}></div>
          <a href="#" className="model__info__btn hover__green__btn">
            Get started!
          </a>
        </div>
      </div>
    </div>
  );
}
