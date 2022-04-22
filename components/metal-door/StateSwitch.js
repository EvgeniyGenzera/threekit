import { useState, useEffect } from "react";

export default function TextSlider({ states, onChange }) {
  const [currentState, setCurrentState] = useState("");

  const handleChange = ({ name }) => {
    onChange(name);
    window.configurator.setConfiguration({ State: name });
    setCurrentState(window.configurator.getConfiguration().State);
  };

  useEffect(() => {
    if (process.browser && window.configurator) {
      setCurrentState(window.configurator.getConfiguration().State);
    }
  });

  return (
    <div className="product__prop__arrow">
      <p className="product__prop__color__text">State</p>
      <div>
        <div className="state-slider">
          <p
            className={`point zero ${currentState === "Close" ? "active" : ""}`}
            onClick={() => handleChange({ name: states[0].name })}
          >
            0%
          </p>
          <p
            className={`point ${currentState.includes("30") ? "active" : ""}`}
            onClick={() => handleChange({ name: states[1].name })}
          >
            30%
          </p>
          <p
            className={`point ${currentState.includes("50") ? "active" : ""}`}
            onClick={() => handleChange({ name: states[2].name })}
          >
            50%
          </p>
          <p
            className={`point ${currentState.includes("100") ? "active" : ""}`}
            onClick={() => handleChange({ name: states[3].name })}
          >
            100%
          </p>
        </div>
      </div>
    </div>
  );
}
