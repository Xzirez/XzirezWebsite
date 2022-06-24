import { Component } from "react";
import "./button.css";
import { mediumaquamarine } from "color-name";

const STYLES = ["customBtn--primary", "customBtn--outline"];

const SIZES = ["customBtn--medium", "customBtn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`customBtn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
