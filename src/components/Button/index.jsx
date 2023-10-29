import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  circle: "rounded-[50%]",
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    indigo_600: "bg-indigo-600",
    light_blue_800: "bg-light_blue-800",
    gray_900: "bg-gray-900",
    white_A700: "bg-white-A700 shadow-bs text-blue-800",
    blue_800: "bg-blue-800 text-white-A700",
  },
  gradient: { purple_600_orange_300: "bg-gradient " },
  outline: {
    gray_400: "outline outline-[0.5px] outline-gray-400",
    blue_gray_100_02: "outline outline-[0.5px] outline-blue_gray-100_02",
  },
};
const sizes = { xs: "p-[9px]", sm: "p-3", md: "p-4", lg: "p-[23px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "gradient", "outline"]),
  color: PropTypes.oneOf([
    "indigo_600",
    "light_blue_800",
    "gray_900",
    "white_A700",
    "blue_800",
    "purple_600_orange_300",
    "gray_400",
    "blue_gray_100_02",
  ]),
};

export { Button };
