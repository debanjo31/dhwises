import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const ContactUsColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 items-center justify-start mb-3.5 mt-[23px] w-[91%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[98%] md:w-full">
            <Img
              className="h-[70px] sm:h-auto mb-[19px] object-cover w-[21%] md:w-full"
              src="images/img_asset41.png"
              alt="assetFortyOne"
            />
            <Img
              className="h-8 md:ml-[0] ml-[306px] md:mt-0 mt-[57px] w-8"
              src="images/img_call_white_a700.svg"
              alt="call_One"
            />
            <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[15px] md:mt-0 mt-[19px] w-[51%] md:w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="text-white-A700 text-xl"
                  size="txtPoppinsBold20"
                >
                  {props?.contactusTwo}
                </Text>
                <Text
                  className="text-white-A700 text-xl"
                  size="txtPoppinsBold20"
                >
                  {props?.importantlinks}
                </Text>
              </div>
              <div className="flex flex-row sm:gap-10 items-center justify-between w-[89%] md:w-full">
                <Text
                  className="text-white-A700 text-xl"
                  size="txtPoppinsMedium20WhiteA700"
                >
                  {props?.p2899522596one}
                </Text>
                <Text
                  className="text-white-A700 text-xl"
                  size="txtPoppinsMedium20WhiteA700"
                >
                  {props?.contactusThree}
                </Text>
              </div>
            </div>
          </div>
          <ul className="flex flex-col justify-start w-full">
            <li>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mr-[11px]">
                <div className="flex flex-row gap-[72px] items-center justify-center md:mt-0 mt-[26px] px-4 py-[11px] w-auto">
                  <Button
                    className="flex h-12 items-center justify-center w-12"
                    shape="circle"
                    color="indigo_600"
                    size="xs"
                    variant="fill"
                  >
                    <Img src="images/img_facebook.svg" alt="facebook" />
                  </Button>
                  <Button
                    className="flex h-12 items-center justify-center w-12"
                    shape="circle"
                    size="xs"
                    variant="gradient"
                    color="purple_600_orange_300"
                  >
                    <Img
                      className="h-[27px]"
                      src="images/img_camera.svg"
                      alt="camera"
                    />
                  </Button>
                  <Button
                    className="flex h-12 items-center justify-center w-12"
                    shape="circle"
                    color="light_blue_800"
                    size="xs"
                    variant="fill"
                  >
                    <Img src="images/img_linkedin.svg" alt="linkedin" />
                  </Button>
                </div>
                <div className="flex flex-row gap-[18px] items-start justify-center w-1/5 md:w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_envelopesimple_white_a700.svg"
                    alt="envelopesimple_One"
                  />
                  <Text
                    className="mt-0.5 text-white-A700 text-xl"
                    size="txtPoppinsMedium20WhiteA700"
                  >
                    {props?.emailtext}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[16%] md:w-full">
                  <Line className="bg-white-A700 h-px md:ml-[0] ml-[3px] w-[99%]" />
                  <Text
                    className="mt-3 text-white-A700 text-xl"
                    size="txtPoppinsMedium20WhiteA700"
                  >
                    {props?.refertext}
                  </Text>
                  <Line className="bg-white-A700 h-px md:ml-[0] ml-[3px] mt-[15px] w-[99%]" />
                  <Text
                    className="mt-[15px] text-white-A700 text-xl"
                    size="txtPoppinsMedium20WhiteA700"
                  >
                    {props?.privacytext}
                  </Text>
                </div>
              </div>
            </li>
            <li>
              <Line className="bg-white-A700 h-px md:ml-[0] ml-[1053px] mr-[11px] mt-[23px]" />
            </li>
            <li>
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between ml-7 md:ml-[0] mt-0.5">
                <Text
                  className="mb-2.5 text-white-A700 text-xl"
                  size="txtPoppinsSemiBold20"
                >
                  {props?.subscribetext}
                </Text>
                <Text
                  className="sm:mt-0 mt-2.5 text-white-A700 text-xl"
                  size="txtPoppinsMedium20WhiteA700"
                >
                  {props?.termstext}
                </Text>
              </div>
            </li>
            <li>
              <div className="h-[62px] md:h-[68px] mt-1.5 relative md:w-full">
                <Input
                  name="groupEight"
                  placeholder="Email here"
                  className="font-poppins font-semibold justify-center leading-[normal] p-0 placeholder:text-blue_gray-400 text-left text-xl w-full"
                  wrapClassName="absolute inset-[0] m-auto shadow-bs w-full"
                  shape="square"
                  color="gray_200"
                  size="sm"
                  variant="fill"
                ></Input>
                {!!props?.subscribebutton ? (
                  <Button
                    className="absolute cursor-pointer font-poppins font-semibold h-full inset-y-[0] leading-[normal] min-w-[207px] my-auto right-[0] text-center text-xl"
                    shape="square"
                    color="blue_800"
                    size="md"
                    variant="fill"
                  >
                    {props?.subscribebutton}
                  </Button>
                ) : null}
              </div>
            </li>
            <li>
              <Text
                className="md:ml-[0] ml-[434px] mt-[98px] text-white-A700 text-xl"
                size="txtPoppinsRegular20WhiteA700"
              >
                {props?.copyrighttext}
              </Text>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

ContactUsColumn.defaultProps = {
  contactusTwo: "CONTACT US",
  importantlinks: "IMPORTANT LINKS",
  p2899522596one: "(289)952-2596",
  contactusThree: "Contact Us",
  emailtext: "info@proliferate.ai",
  refertext: "Refer a Tutor",
  privacytext: "Privacy Policy",
  subscribetext: "Subscribe to our Newsletter",
  termstext: "Terms & Conditions",
  copyrighttext: "© 2023 proliferatetutoring.com All Rights Reserved.",
};

export default ContactUsColumn;
