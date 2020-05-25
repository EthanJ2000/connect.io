import React from "react";
import "./form-button-styles.scss";

const FormButton = ({ text, onButtonClicked }) => {
  return (
    <div className="form-button-container" onClick={() => onButtonClicked()}>
      <p className="form-button-text">{text}</p>
    </div>
  );
};

FormButton.defaultProps = {
  text: "Default Text",
  onButtonClicked: () => {
    console.log("button clicked");
  },
};

export default FormButton;
