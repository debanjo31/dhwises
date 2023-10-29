import React from "react";

import { Img, Line, Text } from "components";

const C01HomepageHowitworks = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-blue-800 text-xs tracking-[2.50px] uppercase w-auto"
          size="txtPoppinsExtraBold12Blue800"
        >
          {props?.howitworkstext}
        </Text>
        <Line className="bg-blue-800 h-1 w-[7%]" />
        <Text
          className="text-black-900 text-xs tracking-[2.50px] uppercase w-auto"
          size="txtPoppinsExtraBold12Black900"
        >
          {props?.infoursimplestepstext}
        </Text>
        <div className="bg-gray-200 flex flex-col items-center justify-start p-[45px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start px-2.5 w-[97%] md:w-full">
            <div className="flex flex-col justify-start w-[18%] md:w-full">
              <Img
                className="h-[53px] ml-20 md:ml-[0] w-[53px]"
                src="images/img_search.svg"
                alt="search_One"
              />
              <Text
                className="md:ml-[0] ml-[68px] mt-3.5 text-black-900 text-xs tracking-[2.50px] uppercase"
                size="txtPoppinsExtraBold12Black900"
              >
                {props?.signuptext}
              </Text>
              <Text
                className="mt-[29px] text-black-900 text-center text-xs tracking-[2.50px] uppercase w-full"
                size="txtPoppinsExtraBold12Black900"
              >
                {props?.signupdescription}
              </Text>
            </div>
            <Line className="bg-blue_gray-400 h-[190px] md:h-px mb-8 md:ml-[0] ml-[61px] md:w-full w-px" />
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[60px] w-[17%] md:w-full">
              <Img
                className="h-[53px] w-[53px]"
                src="images/img_meetingconfirm.svg"
                alt="meetingconfirm"
              />
              <Text
                className="mt-3.5 text-black-900 text-center text-xs tracking-[2.50px] uppercase"
                size="txtPoppinsExtraBold12Black900"
              >
                {props?.choosetutortext}
              </Text>
              <Text
                className="mt-[29px] text-black-900 text-center text-xs tracking-[2.50px] uppercase w-full"
                size="txtPoppinsExtraBold12Black900"
              >
                {props?.choosetutordescription}
              </Text>
            </div>
            <Line className="bg-blue_gray-400 h-[190px] md:h-px mb-8 md:ml-[0] ml-[61px] md:w-full w-px" />
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[60px] w-[21%] md:w-full">
              <Img
                className="h-[53px] w-[53px]"
                src="images/img_books.svg"
                alt="books"
              />
              <Text
                className="mt-3.5 text-black-900 text-center text-xs tracking-[2.50px] uppercase"
                size="txtPoppinsExtraBold12Black900"
              >
                {props?.startlearningtext}
              </Text>
              <Text
                className="mt-[29px] text-black-900 text-center text-xs tracking-[2.50px] uppercase w-full"
                size="txtPoppinsExtraBold12Black900"
              >
                {props?.startlearningdescription}
              </Text>
            </div>
            <Line className="bg-blue_gray-400 h-[190px] md:h-px mb-8 md:ml-[0] ml-[61px] md:w-full w-px" />
            <div className="flex flex-col justify-start md:ml-[0] ml-[60px] w-[18%] md:w-full">
              <Img
                className="h-[53px] md:ml-[0] ml-[81px] w-[53px]"
                src="images/img_search_blue_800.svg"
                alt="search_Two"
              />
              <Text
                className="md:ml-[0] ml-[62px] mt-3.5 text-black-900 text-xs tracking-[2.50px] uppercase"
                size="txtPoppinsExtraBold12Black900"
              >
                {props?.evaluatetext}
              </Text>
              <Text
                className="mt-[29px] text-black-900 text-center text-xs tracking-[2.50px] uppercase w-full"
                size="txtPoppinsExtraBold12Black900"
              >
                {props?.evaluatedescription}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C01HomepageHowitworks.defaultProps = {
  howitworkstext: "How it Works",
  infoursimplestepstext:
    "In four simple steps, you can get started with a tutor today.",
  signuptext: "Sign Up",
  signupdescription: (
    <>
      Sign Up to Expand and join the ranks of proud parents who have the
      incredible opportunity to witness their child&#39;s knowledge flourish
    </>
  ),
  choosetutortext: "Choose Tutor",
  choosetutordescription: (
    <>
      Find your personal online tutor <br />
      from our wide range of
      <br /> competent professionals to <br />
      work with your child.
    </>
  ),
  startlearningtext: "Start Learning",
  startlearningdescription: (
    <>
      Book sessions using our convenient <br />
      scheduling tool. Remember, consistency is essential for achieving success.
    </>
  ),
  evaluatetext: "Evaluate",
  evaluatedescription: (
    <>
      Monitor your child&#39;s progress <br />
      and see a higher level of <br />
      confidence and success.
    </>
  ),
};

export default C01HomepageHowitworks;
