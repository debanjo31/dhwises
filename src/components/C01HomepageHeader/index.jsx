import React from "react";

import { Button, Img, Text } from "components";

const C01HomepageHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[65px] sm:h-auto object-cover w-[18%] md:w-full"
          src="images/img_asset11.png"
          alt="logo"
        />
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-center mb-1 md:ml-[0] ml-[104px] md:mt-0 mt-[21px] w-1/2 md:w-full">
          <div className="flex flex-col items-center justify-start">
            <Text
              className="text-black-900 text-xs tracking-[2.50px] uppercase"
              size="txtPoppinsExtraBold12Black900_1"
            >
              {props?.findtutor}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start ml-7 md:ml-[0]">
            <Text
              className="text-black-900 text-xs tracking-[2.50px] uppercase"
              size="txtPoppinsExtraBold12Black900_1"
            >
              {props?.aboutus}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start ml-7 md:ml-[0]">
            <Text
              className="text-black-900 text-xs tracking-[2.50px] uppercase"
              size="txtPoppinsExtraBold12Black900"
            >
              {props?.ourprograms}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start ml-7 md:ml-[0]">
            <Text
              className="text-black-900 text-xs tracking-[2.50px] uppercase"
              size="txtPoppinsExtraBold12Black900"
            >
              {props?.pricing}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start ml-7 md:ml-[0]">
            <Text
              className="text-black-900 text-xs tracking-[2.50px] uppercase"
              size="txtPoppinsExtraBold12Black900"
            >
              {props?.blogs}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[26px] md:mt-0 mt-0.5 pb-0.5 pr-0.5">
            <Text
              className="mb-4 text-black-900 text-xs tracking-[2.50px] uppercase"
              size="txtPoppinsExtraBold12Black900"
            >
              {props?.contact}
            </Text>
          </div>
        </div>
        <Button
          className="cursor-pointer font-extrabold font-poppins leading-[normal] min-w-[118px] md:ml-[0] ml-[61px] md:mt-0 my-2 text-center text-xs tracking-[2.50px] uppercase"
          shape="round"
          color="blue_800"
          size="md"
          variant="fill"
        >
          {props?.login}
        </Button>
        <Button
          className="!text-black-900 cursor-pointer font-extrabold font-poppins leading-[normal] min-w-[133px] ml-2.5 md:ml-[0] md:mt-0 my-2 text-center text-xs tracking-[2.50px] uppercase"
          shape="round"
          color="gray_400"
          size="md"
          variant="outline"
        >
          {props?.signUp}
        </Button>
      </div>
    </>
  );
};

C01HomepageHeader.defaultProps = {
  findtutor: "Find Tutor",
  aboutus: "About us",
  ourprograms: "Our Programs",
  pricing: "Pricing",
  blogs: "Blog",
  contact: "Contact",
  login: "Login",
  signUp: "Sign Up",
};

export default C01HomepageHeader;
