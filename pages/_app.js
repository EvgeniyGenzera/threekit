import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import "../public/static/css/main.css";
import "../public/static/css/style.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      // once: true,
      duration: 1200,
      offset: 50,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
