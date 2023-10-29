import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import ContactUsCca from "components/ContactUsCca";
import ContactUsColumn from "components/ContactUsColumn";

const ContactUsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto pt-[39px] w-full">
        <div className="flex flex-col gap-10 items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between max-w-[1314px] mx-auto md:px-5 w-full">
            <Img
              className="h-16 md:h-auto object-cover"
              src="images/img_asset11.png"
              alt="assetEleven"
            />
            <ContactUsCca className="flex md:flex-1 md:flex-col flex-row gap-7 items-center justify-center md:mt-0 mt-2 p-[13px] w-auto md:w-full" />
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="h-[394px] md:px-5 relative w-full">
              <Img
                className="h-[394px] m-auto object-cover w-full"
                src="images/img_rectangle188.png"
                alt="rectangle188"
              />
              <Text
                className="absolute h-max inset-[0] justify-center m-auto md:text-5xl text-[100px] text-center text-white-A700 w-max"
                size="txtPoppinsBold100"
              >
                Contact Us
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-[15px] items-start justify-end md:ml-[0] ml-[61px] mt-[154px] md:px-5 w-[96%] md:w-full">
              <div className="flex flex-col items-start justify-start md:mt-0 mt-7 w-[39%] md:w-full">
                <div className="h-[81px] relative w-[68%]">
                  <a
                    href="javascript:"
                    className="mb-[-0.01px] text-blue-800 text-xl z-[1]"
                  >
                    <Text size="txtPoppinsMedium20">Contact US</Text>
                  </a>
                  <Text
                    className="mt-auto mx-auto sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                    size="txtPoppinsSemiBold35"
                  >
                    Get in Touch with Us
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[5px] mt-5 text-black-900 text-xl w-full"
                  size="txtPoppinsRegular20"
                >
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                  Vestibulum
                </Text>
                <div className="flex flex-row gap-[17px] items-start justify-start mt-[61px] w-1/4 md:w-full">
                  <Img
                    className="h-8 mt-[3px] w-8"
                    src="images/img_bank.svg"
                    alt="bank"
                  />
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsMedium20Black900"
                  >
                    Address
                  </Text>
                </div>
                <div className="flex flex-row gap-[17px] items-center justify-start mt-[55px] w-[39%] md:w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_call.svg"
                    alt="call"
                  />
                  <Text
                    className="text-black-900 text-xl"
                    size="txtPoppinsMedium20Black900"
                  >
                    (289)952-2596
                  </Text>
                </div>
                <div className="flex flex-row gap-[19px] items-start justify-start mt-[34px] w-[66%] md:w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_envelopesimple.svg"
                    alt="envelopesimple"
                  />
                  <Text
                    className="mt-[3px] text-black-900 text-xl"
                    size="txtPoppinsMedium20Black900"
                  >
                    info@proliferatetutoring.com
                  </Text>
                </div>
              </div>
              <div className="h-[763px] relative w-[61%] md:w-full">
                <Img
                  className="absolute h-[763px] inset-y-[0] my-auto object-cover right-[0] rounded-[10px] w-[78%]"
                  src="images/img_rectangle202.png"
                  alt="rectangle202"
                />
                <div className="absolute bg-white-A700 flex flex-col h-max inset-y-[0] items-center justify-center left-[0] my-auto p-7 sm:px-5 rounded-[10px] shadow-bs2 w-[67%]">
                  <Input
                    name="groupFive"
                    placeholder="Your Name"
                    className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-left text-xl w-full"
                    wrapClassName="mt-[26px] rounded-[10px] w-[98%]"
                    type="text"
                    color="gray_200"
                    size="md"
                    variant="fill"
                  ></Input>
                  <Input
                    name="groupFour"
                    placeholder="Your Email"
                    className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-left text-xl w-full"
                    wrapClassName="mt-7 rounded-[10px] w-[98%]"
                    type="email"
                    color="gray_200"
                    size="md"
                    variant="fill"
                  ></Input>
                  <Input
                    name="groupThree"
                    placeholder="Your Phone Number"
                    className="leading-[normal] p-0 placeholder:text-blue_gray-400 text-left text-xl w-full"
                    wrapClassName="mt-[22px] rounded-[10px] w-[98%]"
                    type="number"
                    color="gray_200"
                    size="md"
                    variant="fill"
                  ></Input>
                  <TextArea
                    className="bg-gray-200 border-0 leading-[normal] mt-[22px] pb-[35px] pl-[22px] pr-[35px] pt-[18px] sm:px-5 rounded-[10px] placeholder:text-blue_gray-400 text-blue_gray-400 text-left text-xl w-[98%] sm:w-full"
                    name="groupOne"
                    placeholder="Your Message"
                    name="groupOne"
                    placeholder="Your Message"
                  ></TextArea>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] mb-8 min-w-[487px] sm:min-w-full mt-[22px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                    shape="round"
                    color="blue_800"
                    size="sm"
                    variant="fill"
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
            <footer className="flex md:flex-col md:gap-5 items-center justify-center mt-[113px] md:px-5 w-full">
              <Img
                className="flex-1 h-[578px] sm:h-auto object-cover w-full"
                src="images/img_rectangle188.png"
                alt="rectangleNineteen"
              />
              <ContactUsColumn
                className="flex flex-1 flex-col items-start justify-end p-[34px] sm:px-5 w-full"
                subscribebutton="Subscribe"
              />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
