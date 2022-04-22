import React, { useState, useEffect } from "react";
import ColorSlider from "./ColorSlider";
import TextSlider from "./TextSlider";

function Shoe() {
  const [attrs, setAttrs] = useState([]);
  const [colors, setColors] = useState([]);
  const [currentAttr, setCurrentAttr] = useState("");

  const enableFullScreen = () => {
    window.player.player.toggleFullscreen();
  };

  const setNewColor = (e) => {
    window.configurator.setConfiguration({
      [currentAttr]: { assetId: e.assetId },
    });
  };

  const setAttrName = (e) => {
    setCurrentAttr(e.name);
    if (e.values && e.values.length > 0) {
      setColors(e.values);
    }
  };

  const setConfig = (e, initial) => {
    if (initial && e) {
      setCurrentAttr(e.name);
      setColors(e.values);
      window.configurator.setConfiguration({
        [e.name]: { assetId: e.values[0].assetId },
      });
    }
  };

  const hideHand = () => {
    document.querySelector(".product__image__content").style = "display: none";
  };

  const initializePlayer = (is3d) => {
    window
      .threekitPlayer({
        // authToken: "e45c65ec-4132-4988-8a11-d2a0f922b797", // dev
        authToken: "d46811f5-5f1f-417c-bb3b-df313bd9ce8c", // prod
        el: document.getElementById("player"),
        stageId: "8dd4cc80-6fb0-414a-abf8-1a86df201c0d",
        assetId: "314d31bc-2166-45cb-8258-f80dfc17cd1c",
        // showConfigurator: true,
        showAR: true,
      })
      .then(async (api) => {
        window.player = api;
        window.configurator = await api.getConfigurator();
        api.enableApi("player");

        setAttrs(window.configurator.getAttributes());
      });
  };

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
  }, []);
  useEffect(() => {
    setConfig(attrs[0], true);
  }, [attrs.length]);
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
              attrs.map((t, idx) => {
                return {
                  _id: idx + 1,
                  id: t.id,
                  name: t.name,
                  values: t.values,
                  type: t.type,
                };
              })
            }
            onTypeChange={setAttrName}
          />
          <ColorSlider
            colors={colors.length > 0 && colors}
            attrName={currentAttr}
            onColorChange={setNewColor}
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

export default Shoe;
