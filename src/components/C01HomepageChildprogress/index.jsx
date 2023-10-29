import React from "react";

import { Img, Text } from "components";

const C01HomepageChildprogress = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="flex flex-col items-center justify-start py-[30px] w-auto md:w-full">
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between max-w-[1045px] w-full">
              <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                <div className="md:h-[440px] h-[474px] pl-2.5 py-2.5 relative w-full">
                  <div className="absolute flex h-[440px] inset-y-[0] justify-end my-auto right-[11%] w-[73%] sm:w-full">
                    <div className="bg-blue_gray-100_01 h-[410px] ml-[11px] mt-auto rounded-[27px] w-[86%]"></div>
                    <Img
                      className="absolute h-[440px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_technology1.png"
                      alt="technologyOne"
                    />
                  </div>
                  <Img
                    className="absolute h-[58px] left-[5%] object-cover top-[32%] w-[23%]"
                    src="images/img_image10.png"
                    alt="imageTen"
                  />
                  <Img
                    className="absolute bottom-[7%] h-[106px] left-[11%] object-cover w-[30%]"
                    src="images/img_image5.png"
                    alt="imageFive"
                  />
                  <Img
                    className="absolute h-[130px] inset-y-[0] my-auto object-cover right-[0] w-[130px]"
                    src="images/img_image2.png"
                    alt="imageTwo"
                  />
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col gap-[35px] items-start justify-start w-[381px] sm:w-full">
                <div className="bg-red-600_01 h-[7px] w-1/4"></div>
                <Text
                  className="max-w-[351px] md:max-w-full text-blue_gray-900 text-xs tracking-[2.50px] uppercase"
                  size="txtPoppinsExtraBold12Bluegray900"
                >
                  {props?.sectiontitle}
                </Text>
                <Text
                  className="max-w-[381px] md:max-w-full text-gray-600 text-xs tracking-[2.50px] uppercase"
                  size="txtPoppinsExtraBold12Gray600"
                >
                  {props?.description}
                </Text>
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="text-green-300 text-xs tracking-[2.50px] uppercase w-auto"
                    size="txtPoppinsExtraBold12Green300"
                  >
                    {props?.learnmoretext}
                  </Text>
                  <Img
                    className="h-4 w-[9px]"
                    src="images/img_arrowright_green_300.svg"
                    alt="arrowright_One"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C01HomepageChildprogress.defaultProps = {
  sectiontitle: (
    <>
      Easily Track your Child’s <br />
      Progress
    </>
  ),
  description: (
    <>
      Problems trying to resolve the conflict between <br />
      the two major realms of Classical physics: <br />
      Newtonian mechanics{" "}
    </>
  ),
  learnmoretext: "Learn More",
};

export default C01HomepageChildprogress;
