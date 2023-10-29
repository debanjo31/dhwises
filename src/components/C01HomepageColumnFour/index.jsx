import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const C01HomepageColumnFour = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[25px] h-[607px] md:h-auto items-center justify-between py-[15px] w-auto md:w-full">
          <Text
            className="text-blue-800 text-xs tracking-[2.50px] uppercase w-auto"
            size="txtPoppinsExtraBold12Blue800"
          >
            {props?.discoverourtop}
          </Text>
          <Line className="bg-blue-800 h-1 w-[7%]" />
          <Text
            className="max-w-[592px] md:max-w-full text-blue_gray-400 text-center text-xs tracking-[2.50px] uppercase"
            size="txtPoppinsExtraBold12"
          >
            {props?.descriptionThree}
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <Button
              className="flex h-[58px] items-center justify-center mb-[174px] md:mt-0 mt-36 rounded-[50%] w-[58px]"
              shape="circle"
              color="white_A700"
              size="md"
              variant="fill"
            >
              <Img
                className="h-[25px]"
                src="images/img_arrowleft_blue_gray_400.svg"
                alt="arrowleft"
              />
            </Button>
            <div className="flex ml-8 md:ml-[0] pl-[15px] py-[15px] relative rounded-[50px] w-[84%] md:w-full">
              <div className="flex ml-1.5 my-auto w-[79%] md:w-full">
                <div className="md:h-[265px] h-[345px] ml-[undefinedpx] my-auto w-[63%] sm:w-full z-[1]">
                  <div className="absolute bg-gray-200 bottom-[0] flex flex-col items-center justify-end left-[0] p-2.5 rounded-bl-[30px] rounded-br-[30px] w-[59%]">
                    <div className="flex flex-col gap-[11px] items-start justify-start mb-1.5 mt-44 w-[98%] md:w-full">
                      <div className="h-[18px] relative w-[24%]">
                        <Line className="absolute bg-red-700 h-px inset-x-[0] mx-auto top-[28%] w-full" />
                        <Text
                          className="absolute h-full inset-y-[0] left-[0] my-auto text-gray-500_01 text-xs tracking-[2.50px] uppercase"
                          size="txtPoppinsExtraBold12Gray50001"
                        >
                          {props?.languageOne}
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-full">
                        <Input
                          name="enroll"
                          placeholder="Enroll"
                          className="!placeholder:text-white-A700 !text-white-A700 font-extrabold font-poppins leading-[normal] p-0 text-left text-xs tracking-[2.50px] uppercase w-full"
                          wrapClassName="w-[34%]"
                          shape="round"
                          color="red_700"
                          size="xs"
                          variant="fill"
                        ></Input>
                        <Img
                          className="h-3 ml-[159px] my-[11px] w-3"
                          src="images/img_star1.svg"
                          alt="starOne"
                        />
                        <Text
                          className="ml-0.5 text-blue_gray-400 text-xs tracking-[2.50px] uppercase"
                          size="txtPoppinsExtraBold12"
                        >
                          {props?.fortyfive}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[164px] left-[0] top-[0] w-[59%]">
                    <Img
                      className="absolute h-[164px] inset-[0] justify-center m-auto object-cover rounded-[30px] w-full"
                      src="images/img_rectangle20.png"
                      alt="rectangleTwenty"
                    />
                    <div className="absolute flex flex-row items-start justify-between left-[5%] top-[16%] w-[85%]">
                      <Text
                        className="mt-2 text-white-A700 text-xs tracking-[2.50px] uppercase"
                        size="txtPoppinsExtraBold12WhiteA700"
                      >
                        {props?.dataanalysisadvOne}
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_component1.svg"
                        alt="componentOne"
                      />
                    </div>
                  </div>
                  <Text
                    className="absolute bottom-[24%] inset-x-[0] mx-auto text-black-900 text-xs tracking-[2.50px] uppercase w-[97%] sm:w-full"
                    size="txtPoppinsExtraBold12Black900"
                  >
                    {props?.descriptionFour}
                  </Text>
                </div>
                <div className="md:h-[265px] h-[345px] ml-[-211px] my-auto w-[61%] sm:w-full z-[1]">
                  <div className="absolute bg-gray-200 bottom-[0] flex flex-col items-center justify-end left-[0] p-2.5 rounded-bl-[30px] rounded-br-[30px] w-[61%]">
                    <div className="flex flex-col gap-[11px] items-start justify-start mb-1.5 mt-44 w-[98%] md:w-full">
                      <div className="h-[18px] relative w-[24%]">
                        <Line className="absolute bg-red-700 h-px inset-x-[0] mx-auto top-[28%] w-full" />
                        <Text
                          className="absolute h-full inset-y-[0] left-[0] my-auto text-gray-500_01 text-xs tracking-[2.50px] uppercase"
                          size="txtPoppinsExtraBold12Gray50001"
                        >
                          {props?.languageTwo}
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-full">
                        <Input
                          name="enroll_One"
                          placeholder="Enroll"
                          className="!placeholder:text-white-A700 !text-white-A700 font-extrabold font-poppins leading-[normal] p-0 text-left text-xs tracking-[2.50px] uppercase w-full"
                          wrapClassName="w-[34%]"
                          shape="round"
                          color="red_700"
                          size="xs"
                          variant="fill"
                        ></Input>
                        <Img
                          className="h-3 ml-[159px] my-[11px] w-3"
                          src="images/img_star2.svg"
                          alt="starTwo"
                        />
                        <Text
                          className="ml-0.5 text-blue_gray-400 text-xs tracking-[2.50px] uppercase"
                          size="txtPoppinsExtraBold12"
                        >
                          {props?.fortyfiveOne}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[164px] left-[0] top-[0] w-[61%]">
                    <Img
                      className="absolute h-[164px] inset-[0] justify-center m-auto object-cover rounded-[30px] w-full"
                      src="images/img_rectangle23.png"
                      alt="rectangleTwentyThree"
                    />
                    <div className="absolute flex flex-row items-start justify-between left-[5%] top-[16%] w-[85%]">
                      <Text
                        className="mt-2 text-white-A700 text-xs tracking-[2.50px] uppercase"
                        size="txtPoppinsExtraBold12WhiteA700"
                      >
                        {props?.advancedpython}
                      </Text>
                      <Img
                        className="h-5 w-5"
                        src="images/img_component1.svg"
                        alt="componentTwo"
                      />
                    </div>
                  </div>
                  <Text
                    className="absolute bottom-[24%] inset-x-[0] mx-auto text-black-900 text-xs tracking-[2.50px] uppercase w-[97%] sm:w-full"
                    size="txtPoppinsExtraBold12Black900"
                  >
                    {props?.descriptionFive}
                  </Text>
                </div>
              </div>
              <div className="ml-[-192px] my-auto overflow-x-auto w-[37%] z-[1]">
                <div className="h-[345px] overflow-auto relative w-full">
                  <div className="h-[345px] ml-auto my-auto w-full">
                    <div className="absolute h-[345px] inset-y-[0] left-[0] my-auto w-[82%] sm:w-full">
                      <div className="md:h-[265px] h-[345px] m-auto w-full">
                        <div className="absolute bg-gray-200 bottom-[0] flex flex-col items-center justify-end left-[0] p-2.5 rounded-bl-[30px] rounded-br-[30px] w-3/5">
                          <div className="flex flex-col gap-[11px] items-start justify-start mb-1.5 mt-44 w-[98%] md:w-full">
                            <div className="h-[18px] relative w-[24%]">
                              <Line className="absolute bg-red-700 h-px inset-x-[0] mx-auto top-[28%] w-full" />
                              <Text
                                className="absolute h-full inset-y-[0] left-[0] my-auto text-gray-500_01 text-xs tracking-[2.50px] uppercase"
                                size="txtPoppinsExtraBold12Gray50001"
                              >
                                {props?.languageThree}
                              </Text>
                            </div>
                            <div className="flex flex-row items-start justify-start w-full">
                              <Input
                                name="enroll_Two"
                                placeholder="Enroll"
                                className="!placeholder:text-white-A700 !text-white-A700 font-extrabold font-poppins leading-[normal] p-0 text-left text-xs tracking-[2.50px] uppercase w-full"
                                wrapClassName="w-[34%]"
                                shape="round"
                                color="red_700"
                                size="xs"
                                variant="fill"
                              ></Input>
                              <Img
                                className="h-3 ml-[159px] my-[11px] w-3"
                                src="images/img_star3.svg"
                                alt="starThree"
                              />
                              <Text
                                className="ml-0.5 text-blue_gray-400 text-xs tracking-[2.50px] uppercase"
                                size="txtPoppinsExtraBold12"
                              >
                                {props?.fortyfiveTwo}
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="absolute h-[164px] left-[0] top-[0] w-3/5">
                          <Img
                            className="absolute h-[164px] inset-[0] justify-center m-auto object-cover rounded-[30px] w-full"
                            src="images/img_rectangle26.png"
                            alt="rectangleTwentySix"
                          />
                          <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto top-[16%] w-[87%]">
                            <Text
                              className="mt-2 text-white-A700 text-xs tracking-[2.50px] uppercase"
                              size="txtPoppinsExtraBold12WhiteA700"
                            >
                              {props?.marketanalysis}
                            </Text>
                            <Img
                              className="h-5 w-5"
                              src="images/img_component1.svg"
                              alt="componentThree"
                            />
                          </div>
                        </div>
                        <Text
                          className="absolute bottom-[24%] inset-x-[0] mx-auto text-black-900 text-xs tracking-[2.50px] uppercase w-[97%] sm:w-full"
                          size="txtPoppinsExtraBold12Black900"
                        >
                          {props?.descriptionSix}
                        </Text>
                      </div>
                      <div className="absolute flex flex-col h-full inset-y-[0] items-end justify-end my-auto pl-[17px] py-[17px] right-[26%]">
                        <Text
                          className="mb-[65px] mt-[174px] text-black-900 text-xs tracking-[2.50px] uppercase w-full"
                          size="txtPoppinsExtraBold12Black900"
                        >
                          {props?.descriptionSeven}
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bg-gray-200 bottom-[0] flex flex-col items-center justify-end p-2.5 right-[0] rounded-bl-[30px] rounded-br-[30px] w-[49%]">
                      <div className="flex flex-col gap-3 items-start justify-start mb-1.5 mt-44 w-[98%] md:w-full">
                        <div className="h-[18px] relative w-[24%]">
                          <Line className="absolute bg-red-700 h-px inset-x-[0] mx-auto top-[28%] w-full" />
                          <Text
                            className="absolute h-full inset-y-[0] left-[0] my-auto text-gray-500_01 text-xs tracking-[2.50px] uppercase"
                            size="txtPoppinsExtraBold12Gray50001"
                          >
                            {props?.languageFour}
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Input
                            name="enroll_Three"
                            placeholder="Enroll"
                            className="!placeholder:text-white-A700 !text-white-A700 font-extrabold font-poppins leading-[normal] p-0 text-left text-xs tracking-[2.50px] uppercase w-full"
                            wrapClassName="w-[34%]"
                            shape="round"
                            color="red_700"
                            size="xs"
                            variant="fill"
                          ></Input>
                          <Img
                            className="h-3 ml-[159px] my-[11px] w-3"
                            src="images/img_star3_12x12.svg"
                            alt="starThree_One"
                          />
                          <Text
                            className="ml-0.5 text-blue_gray-400 text-xs tracking-[2.50px] uppercase"
                            size="txtPoppinsExtraBold12"
                          >
                            {props?.fortyfiveThree}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[164px] right-[0] top-[0] w-4/5">
                    <Img
                      className="absolute h-[164px] inset-[0] justify-center m-auto object-cover rounded-[30px] w-full"
                      src="images/img_rectangle29.png"
                      alt="rectangleTwentyNine"
                    />
                    <Text
                      className="absolute left-[5%] text-white-A700 text-xs top-[27%] tracking-[2.50px] uppercase w-[54%] sm:w-full"
                      size="txtPoppinsExtraBold12WhiteA700"
                    >
                      {props?.essentialsellinOne}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="flex h-[58px] items-center justify-center mb-36 md:ml-[0] ml-[77px] md:mt-0 mt-[174px] rounded-[50%] w-[58px]"
              shape="circle"
              color="white_A700"
              size="md"
              variant="fill"
            >
              <Img
                className="h-[25px]"
                src="images/img_arrowright_black_900.svg"
                alt="arrowright"
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

C01HomepageColumnFour.defaultProps = {
  discoverourtop: "Discover our top subjects",
  descriptionThree: (
    <>
      Unlock a world of knowledge with our most sought-after <br />
      subjects. Explore, learn, and excel in the areas that pique your <br />
      curiosity and passion.
    </>
  ),
  languageOne: "English",
  fortyfive: "4.5",
  dataanalysisadvOne: (
    <>
      Data <br />
      Analysis
      <br />
      (Advanced)
    </>
  ),
  descriptionFour: (
    <>
      Unlock the hidden insights within your data. Dive into the <br />
      world of Advanced Data Analysis, where raw information <br />
      becomes actionable intelligence, and decisions are driven <br />
      by precision and foresight.
    </>
  ),
  languageTwo: "English",
  fortyfiveOne: "4.5",
  advancedpython: (
    <>
      Advanced
      <br />
      Python for
      <br />
      Web3
    </>
  ),
  descriptionFive: (
    <>
      Embark on a journey into the future of web development <br />
      with Advanced Python for Web3. Harness the power of <br />
      blockchain and decentralized applications to reshape <br />
      the digital landscape.
    </>
  ),
  languageThree: "English",
  fortyfiveTwo: "4.5",
  marketanalysis: (
    <>
      Market <br />
      Analysis for
      <br />
      Beginners
    </>
  ),
  descriptionSix: (
    <>
      Step into the fascinating realm of Market Analysis for <br />
      Beginners. Explore the fundamentals of understanding <br />
      markets, spotting trends, and making informed decisions <br />
      in the ever-changing world of commerce.
    </>
  ),
  descriptionSeven: (
    <>
      Step into the fascinating realm of Market Analysis for <br />
      Beginners. Explore the fundamentals of understanding <br />
      markets, spotting trends, and making informed decisions <br />
      in the ever-changing world of commerce.
    </>
  ),
  languageFour: "English",
  fortyfiveThree: "4.5",
  essentialsellinOne: (
    <>
      Essential Selling
      <br />
      Skills & Techniques
    </>
  ),
};

export default C01HomepageColumnFour;
