import React from "react";

import { List, Text } from "components";

const C01HomepagePaymentsection = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[33px] items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[63px] items-center justify-center w-[73%] md:w-full">
            <Text
              className="text-blue-800 text-xs tracking-[2.50px] uppercase w-auto"
              size="txtPoppinsExtraBold12Blue800"
            >
              {props?.planname}
            </Text>
            <Text
              className="text-blue_gray-400 text-center text-xs tracking-[2.50px] uppercase w-[76%] sm:w-full"
              size="txtPoppinsExtraBold12"
            >
              {props?.plandescription}
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[62px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
            orientation="horizontal"
          >
            <div
              className="bg-cover bg-no-repeat bg-white-A700_66 flex flex-1 flex-col md:gap-10 gap-[110px] h-[587px] items-center justify-start outline outline-[10px] outline-blue-400 p-7 sm:px-5 rounded-[25px] w-full"
              style={{ backgroundImage: "url('images/img_100card.png')" }}
            >
              <div className="flex flex-col items-start justify-start pb-[52px] md:pr-10 sm:pr-5 pr-[52px] w-[95%] md:w-full">
                <div className="flex flex-row gap-[17px] items-start justify-start mb-1 w-full">
                  <Text
                    className="mt-[203px] text-white-A700_7f text-xs tracking-[2.50px] uppercase"
                    size="txtPoppinsExtraBold12WhiteA7007f"
                  >
                    {props?.basicprice}
                  </Text>
                  <div className="flex flex-col justify-start">
                    <Text
                      className="md:ml-[0] ml-[62px] text-black-900 text-xs tracking-[2.50px] uppercase"
                      size="txtPoppinsExtraBold12Black900"
                    >
                      {props?.basicname}
                    </Text>
                    <Text
                      className="mt-11 text-black-900 text-xs tracking-[2.50px] uppercase w-full"
                      size="txtPoppinsExtraBold12Black900"
                    >
                      {props?.basicduration}
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[26px] text-black-900 text-xs tracking-[2.50px] uppercase"
                      size="txtPoppinsExtraBold12Black900"
                    >
                      {props?.priceOne}
                    </Text>
                  </div>
                </div>
              </div>
              <Text
                className="bg-blue-800 h-20 justify-center mb-14 pb-[35px] pt-1 sm:px-5 px-[35px] rounded-[25px] text-white-A700 text-xs tracking-[2.50px] uppercase w-[253px]"
                size="txtPoppinsExtraBold12WhiteA700"
              >
                {props?.componentsixteen}
              </Text>
            </div>
            <div
              className="bg-cover bg-no-repeat bg-white-A700_66 flex flex-1 flex-col md:gap-10 gap-[110px] h-[587px] items-center justify-start outline outline-[10px] outline-light_green-A700 p-8 sm:px-5 rounded-[25px] w-full"
              style={{ backgroundImage: "url('images/img_200card.png')" }}
            >
              <div className="flex flex-col items-start justify-start mt-2.5 pb-[54px] md:pr-10 sm:pr-5 pr-[54px] w-[97%] md:w-full">
                <div className="flex flex-row gap-[13px] items-end justify-start mb-0.5 w-full">
                  <Text
                    className="mt-[194px] text-white-A700_7f text-xs tracking-[2.50px] uppercase"
                    size="txtPoppinsExtraBold12WhiteA7007f"
                  >
                    {props?.standardprice}
                  </Text>
                  <div className="flex flex-col justify-start">
                    <Text
                      className="ml-10 md:ml-[0] text-black-900 text-xs tracking-[2.50px] uppercase"
                      size="txtPoppinsExtraBold12Black900"
                    >
                      {props?.standardname}
                    </Text>
                    <Text
                      className="mt-[30px] text-black-900 text-xs tracking-[2.50px] uppercase w-full"
                      size="txtPoppinsExtraBold12Black900"
                    >
                      {props?.standardduration}
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[26px] text-black-900 text-xs tracking-[2.50px] uppercase"
                      size="txtPoppinsExtraBold12Black900"
                    >
                      {props?.priceone1}
                    </Text>
                  </div>
                </div>
              </div>
              <Text
                className="bg-green-A700 h-20 justify-center mb-[53px] pb-[35px] pt-1 sm:px-5 px-[35px] rounded-[25px] text-white-A700 text-xs tracking-[2.50px] uppercase w-[253px]"
                size="txtPoppinsExtraBold12WhiteA700"
              >
                {props?.componentseventeen}
              </Text>
            </div>
            <div
              className="bg-cover bg-no-repeat bg-white-A700_66 flex flex-1 flex-col md:gap-10 gap-[101px] h-[587px] items-center justify-start outline outline-[10px] outline-amber-600 sm:pl-5 pl-[34px] py-[34px] rounded-[25px] w-full"
              style={{ backgroundImage: "url('images/img_frame264.png')" }}
            >
              <div className="flex flex-col items-start justify-start mt-[3px] pb-[57px] md:pr-10 sm:pr-5 pr-[57px] w-full">
                <div className="flex flex-row gap-3 items-end justify-start w-[88%] md:w-full">
                  <Text
                    className="mt-[202px] text-white-A700_7f text-xs tracking-[2.50px] uppercase"
                    size="txtPoppinsExtraBold12WhiteA7007f"
                  >
                    {props?.premiumprice}
                  </Text>
                  <div className="flex flex-col justify-start">
                    <Text
                      className="md:ml-[0] ml-[46px] text-black-900 text-xs tracking-[2.50px] uppercase"
                      size="txtPoppinsExtraBold12Black900"
                    >
                      {props?.premiumname}
                    </Text>
                    <Text
                      className="mt-[39px] text-black-900 text-xs tracking-[2.50px] uppercase w-full"
                      size="txtPoppinsExtraBold12Black900"
                    >
                      {props?.premiumduration}
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[26px] text-black-900 text-xs tracking-[2.50px] uppercase"
                      size="txtPoppinsExtraBold12Black900"
                    >
                      {props?.priceone2}
                    </Text>
                  </div>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-20 items-start justify-start mb-14 p-1"
                style={{ backgroundImage: "url('images/img_btn.svg')" }}
              >
                <Text
                  className="mb-[52px] md:ml-[0] ml-[53px] text-white-A700 text-xs tracking-[2.50px] uppercase"
                  size="txtPoppinsExtraBold12WhiteA700"
                >
                  {props?.getstarted}
                </Text>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

C01HomepagePaymentsection.defaultProps = {
  planname: "Our Payment Plan",
  plandescription: (
    <>
      Lorem ipsum dolor sit amet consectetur. Sit est feugiat morbi fermentum{" "}
      <br />
      neque morbi nulla quam. Enim aliquet ullamcorper tellus diam <br />
      lorem arcu aliquet orci pellentesque. Donec at at suspendisse
      sollicitudin. <br />
      Posuere id nibh porta lectus in.
    </>
  ),
  basicprice: "$100",
  basicname: "Basic",
  basicduration: (
    <>
      2 Tutors
      <br />5 Subjects
      <br />
      10 Hours
    </>
  ),
  priceOne: "$100",
  componentsixteen: "Get Started",
  standardprice: "$200",
  standardname: "Standard",
  standardduration: (
    <>
      2 Tutors
      <br />5 Subjects
      <br />
      10 Hours
    </>
  ),
  priceone1: "$200",
  componentseventeen: "Get Started",
  premiumprice: "$500",
  premiumname: "Premium",
  premiumduration: (
    <>
      2 Tutors
      <br />5 Subjects
      <br />
      10 Hours
    </>
  ),
  priceone2: "$500",
  getstarted: "Get Started",
};

export default C01HomepagePaymentsection;
