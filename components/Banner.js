export default function Banner({ banner }) {
  return (
    <div className="banner" style={{ backgroundColor: banner.bg }}>
      <div className="container">
        <div className="banner__content">
          <h1 className="banner__content__title" data-aos="fade-up">
            {banner.h1}
          </h1>
          <p
            className="banner__content__description"
            data-aos="fade-up"
            ata-aos-delay="800"
            data-aos-duration="1800"
          >
            {banner.text}
          </p>
        </div>
      </div>
    </div>
  );
}
