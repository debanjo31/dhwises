import React from "react";

const sizeClasses = {
  txtPoppinsMedium20Black900: "font-medium font-poppins",
  txtPoppinsExtraBold12Black900: "font-extrabold font-poppins",
  txtPoppinsExtraBold32WhiteA700: "font-extrabold font-poppins",
  txtPoppinsSemiBold35: "font-poppins font-semibold",
  txtPoppinsExtraBold12Gray50001: "font-extrabold font-poppins",
  txtPoppinsExtraBold12WhiteA7007f: "font-extrabold font-poppins",
  txtPoppinsExtraBold12: "font-extrabold font-poppins",
  txtPoppinsMedium20WhiteA700: "font-medium font-poppins",
  txtPoppinsExtraBold12Green300: "font-extrabold font-poppins",
  txtPoppinsExtraBold32: "font-extrabold font-poppins",
  txtPoppinsExtraBold12Black900_1: "font-extrabold font-poppins",
  txtPoppinsExtraBold16: "font-extrabold font-poppins",
  txtPoppinsExtraBold12Gray600: "font-extrabold font-poppins",
  txtPoppinsMedium19: "font-medium font-poppins",
  txtPoppinsRegular20WhiteA700: "font-normal font-poppins",
  txtPoppinsExtraBold12Blue800: "font-extrabold font-poppins",
  txtPoppinsExtraBold12Gray500: "font-extrabold font-poppins",
  txtPoppinsExtraBold12Bluegray900: "font-extrabold font-poppins",
  txtPoppinsBold20: "font-bold font-poppins",
  txtPoppinsBold100: "font-bold font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsExtraBold12WhiteA700: "font-extrabold font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsExtraBold48: "font-extrabold font-poppins",
  txtPoppinsExtraBold24: "font-extrabold font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
