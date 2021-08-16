import React from "react";
import "./Button.scss";

const Button = (props) => {
  const style = `button ${props.endIcon ? "endIcon" : ""}${
    props.startIcon ? "startIcon" : ""
  } ${props.variant || ""} ${props.color || ""} ${
    props.disabled ? "disabled" : ""
  } ${props.disabledShadow ? "disabledShadow" : ""} ${props.size || ""}`;
  return (
    <button className={style}>
      {props.startIcon ? (
        <span class="material-icons start">{props.startIcon}</span>
      ) : (
        ""
      )}
      <span class="btn__text">Default</span>
      {props.endIcon ? (
        <span class="material-icons end">{props.endIcon}</span>
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
