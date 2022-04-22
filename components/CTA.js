export default function CTA({ cta }) {
  return (
    <div className="container" data-aos="fade-up" data-aos-duration="1800">
      <div className="getstarted">
        <div className="getstarted__info">
          <h2
            className="getstarted__info__title"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            {cta.heading}
          </h2>
          <p
            className="getstarted__info__desc"
            data-aos="fade-up"
            data-aos-duration="2100"
          >
            {cta.text}
          </p>
          <a
            className="getstarted__info__btn hover__white__btn"
            href={cta.buttonLink}
          >
            {cta.buttonText}
          </a>
        </div>
        <div
          className="getstarted__image"
          data-aos="fade-up"
          data-aos-duration="2100"
        >
          <img src="/static/images/threekitbox.png" alt="" />
        </div>
      </div>
    </div>
  );
}
