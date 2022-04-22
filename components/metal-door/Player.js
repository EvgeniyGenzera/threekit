import React, { useState, useEffect } from "react";
import ColorSlider from "./ColorSlider";
import StateSwitch from "./StateSwitch";

function Door() {
  const [attrs, setAttrs] = useState([]);

  const enableFullScreen = () => {
    window.player.player.toggleFullscreen();
  };

  const setColor = (e) => {
    window.configurator.setConfiguration({ [e.attr]: e.name });
  };

  const setDoorState = (e) => {
    window.configurator.setConfiguration({ State: e });
  };

  const hideHand = () => {
    document.querySelector(".product__image__content").style = "display: none";
  };

  const initializePlayer = (is3d) => {
    window
      .threekitPlayer({
        // authToken: "297b9b70-3d85-4192-98a7-2acf0641beb6", //dev
        authToken: "9ffbef10-33cd-4133-99c1-d1fb438046d5", // prod
        el: document.getElementById("player"),
        stageId: "",
        assetId: "5cbbd353-7f8a-42d1-9bb3-794a73388bdc",
        showConfigurator: false,
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
        <div className="product__prop col-4">
          <StateSwitch
            states={
              attrs.length > 0 &&
              attrs
                .find((a) => a.name === "State")
                .values.map((v, idx) => {
                  return {
                    _id: idx + 1,
                    name: v,
                  };
                })
            }
            onChange={setDoorState}
          />
          <ColorSlider
            colors={
              attrs.length > 0 &&
              attrs
                .find((a) => a.name === "Door Color")
                .values.map((v, idx) => {
                  return {
                    name: v,
                    _id: idx + 1,
                  };
                })
            }
            onChange={setColor}
            attrName="Door Color"
          />
          <ColorSlider
            colors={
              attrs.length > 0 &&
              attrs
                .find((a) => a.name === "Handle Color")
                .values.map((v, idx) => {
                  return {
                    name: v,
                    _id: idx + 1,
                  };
                })
            }
            onChange={setColor}
            attrName="Handle Color"
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
    // <div className="App">
    //   <div id="player" style={{ height: "700px" }}></div>

    //   {/* Create simple element for attributes. They do not contain the initial
    //   configuration but they do work */}
    //   {attrs.map((e) => {
    //     return (
    //       <select
    //         name={e.name}
    //         id={e.name}
    //         key={e.name}
    //         onChange={(e) => setConfig(e)}
    //       >
    //         {e.values.map((e) => {
    //           return (
    //             <option key={e} value={e}>
    //               {e}
    //             </option>
    //           );
    //         })}
    //       </select>
    //     );
    //   })}
    // </div>
  );
}

export default Door;
