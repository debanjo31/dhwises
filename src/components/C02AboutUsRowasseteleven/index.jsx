import React from "react";

import { Button, Img, Text } from "components";

const C02AboutUsRowasseteleven = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-16 sm:h-auto object-cover w-[18%] md:w-full"
          src="images/img_asset11.png"
          alt="assetEleven"
        />
        <div className="flex sm:flex-col flex-row gap-7 h-[55px] md:h-auto items-center justify-center max-w-[722px] md:ml-[0] ml-[46px] p-[13px] w-full">
          <Text
            className="text-black-900 text-xs tracking-[2.50px] uppercase w-auto"
            size="txtPoppinsExtraBold12Black900"
          >
            {props?.findtutor}
          </Text>
          <Text
            className="text-white-A700 text-xs tracking-[2.50px] uppercase w-auto"
            size="txtPoppinsExtraBold12WhiteA700"
          >
            {props?.aboutus}
          </Text>
          <Text
            className="text-black-900 text-xs tracking-[2.50px] uppercase w-auto"
            size="txtPoppinsExtraBold12Black900"
          >
            {props?.ourprograms}
          </Text>
          <Text
            className="text-black-900 text-xs tracking-[2.50px] uppercase w-auto"
            size="txtPoppinsExtraBold12Black900"
          >
            {props?.pricing}
          </Text>
          <Text
            className="text-black-900 text-xs tracking-[2.50px] uppercase w-auto"
            size="txtPoppinsExtraBold12Black900"
          >
            {props?.blogs}
          </Text>
          <Text
            className="text-black-900 text-xs tracking-[2.50px] uppercase w-auto"
            size="txtPoppinsExtraBold12Black900"
          >
            {props?.contact}
          </Text>
        </div>
        <div className="flex flex-col h-[55px] md:h-auto items-center justify-center md:ml-[0] ml-[22px] p-[9px] w-[139px]">
          <Button
            className="cursor-pointer font-extrabold font-poppins leading-[normal] min-w-[121px] text-center text-xs tracking-[2.50px] uppercase"
            shape="round"
            color="blue_800"
            size="xs"
            variant="fill"
          >
            {props?.login}
          </Button>
        </div>
        <Button
          className="!text-black-900 cursor-pointer font-extrabold font-poppins leading-[normal] min-w-[121px] ml-3 md:ml-[0] text-center text-xs tracking-[2.50px] uppercase"
          shape="round"
          color="blue_gray_100_02"
          size="xs"
          variant="outline"
        >
          {props?.signup}
        </Button>
      </div>
    </>
  );
};

C02AboutUsRowasseteleven.defaultProps = {
  findtutor: "Find Tutor",
  aboutus: "About us",
  ourprograms: "Our Programs",
  pricing: "Pricing",
  blogs: "Blog",
  contact: "Contact",
  login: "Login",
};

export default C02AboutUsRowasseteleven;
