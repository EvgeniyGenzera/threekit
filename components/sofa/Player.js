import { useState, useEffect } from "react";
import { apply2DSpin } from "../../lib/spin";
import ColorSlider from "./ColorSlider";
import TextSlider from "./TextSlider";

Array.prototype.swap = function (x, y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
};

function Couch() {
  const [attrs, setAttrs] = useState([]);
  const [mat, setMat] = useState('');

  if (process.browser) {
    window.is3d = true;
  }

  const setMaterial = (e) => {
    setMat(e.name);
    window.configurator.setConfiguration({ Material: e.name });
  };

  const setColor = (e) => {
    window.configurator.setConfiguration({ "Material Color": e.name });
  };

  const enableFullScreen = () => {
    window.player.player.toggleFullscreen();
  };

  const hideHand = () => {
    document.querySelector(".product__image__content").style = "display: none";
  };

  const changeExperience = () => {
    window.is3d ? (window.is3d = false) : (window.is3d = true);

    window.is3d
      ? window.configurator.setConfiguration({
          Rotation: "1",
          Position: "Whitesweep",
        })
      : window.configurator.setConfiguration({
          Rotation: "Lifestyle",
          Position: "Env",
        });
  };

  const initializePlayer = (is3d) => {
    window
      .threekitPlayer({
        // authToken: "297b9b70-3d85-4192-98a7-2acf0641beb6", // dev
        authToken: "9ffbef10-33cd-4133-99c1-d1fb438046d5", // prod
        el: document.getElementById("player"),
        stageId: "",
        assetId: "e7e5fe5f-60a6-4b4e-a231-4132fef8a966",
        display: "image",
        showConfigurator: false,
        showAR: false,
      })
      .then(async (api) => {
        window.player = api;
        window.configurator = await api.getConfigurator();
        api.enableApi("player");
        await window.configurator.prefetchAttributes(["Rotation"]);

        apply2DSpin({ attrName: "Rotation", direction: 1 })(api);

        setAttrs(window.configurator.getAttributes());
      });
  };

  console.log(attrs);

  useEffect(() => {
    initializePlayer();
    document
      .getElementsByClassName("product")[0]
      .addEventListener("mousedown", function () {
        hideHand();
      });

    document
      .getElementsByClassName("product")[0]
      .addEventListener("touchstart", function () {
        hideHand();
      });
    setMat('Fabric');
  }, []);
  return (
    <div className="container" data-aos="fade-up" data-aos-duration="1800">
      <div className="product">
        <div id="player"></div>
        <div className="product__image">
          <div className="product__image__content">
            <span className="product__image__content__icon">
              <img src="/static/images/icons/configurator/Vector.svg" alt="" />
            </span>
            <p className="product__image__content__text">Drag to rotate</p>
          </div>
        </div>
        <div className="product__prop">
          <TextSlider
            types={
              attrs.length > 0 &&
              attrs
                .find((a) => a.name === "Material")
                .values
                .map((v, idx) => {
                  return {
                    name: v,
                    _id: idx + 1,
                  };
                })
            }
            onChange={setMaterial}
            mat={mat}
          />
          <ColorSlider
            colors={
              attrs.length > 0 &&
              attrs
                .find((a) => a.name === "Material Color")
                .values.map((v, idx) => {
                  return {
                    name: v,
                    _id: idx + 1,
                  };
                })
            }
            onChange={setColor}
            mat={mat}
          />
          <div className="product__prop__button">
            <div
              className="product__prop__button__content"
              onClick={() => enableFullScreen()}
            >
              <img src="/static/images/configurator/ratio.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Couch;
