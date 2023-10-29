import React from "react";

import { Img, Text } from "components";

const C01HomepageTestimonial = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[1555px] h-[645px] relative w-full">
          <Text
            className="ml-[245px] mt-[52px] text-blue-800 text-xs tracking-[2.50px] uppercase"
            size="txtPoppinsExtraBold12Blue800"
          >
            {props?.text}
          </Text>
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-start m-auto w-auto md:w-full">
            <div className="flex flex-col items-center justify-start sm:pl-5 pl-[34px] py-[34px] w-full">
              <div className="flex flex-col gap-10 items-center justify-start mb-[59px] mt-10 w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                  <div className="bg-white-A700_26 flex flex-col h-[100px] items-center justify-end p-2.5 w-[100px]">
                    <Img
                      className="h-[79px] w-[79px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft_One"
                    />
                  </div>
                  <Text
                    className="md:ml-[0] ml-[41px] md:mt-0 mt-[47px] text-black-900 text-xs tracking-[2.50px] uppercase"
                    size="txtPoppinsExtraBold12Black900"
                  >
                    {props?.hereswhatsome}
                  </Text>
                  <div className="bg-white-A700_05 flex flex-col h-[100px] items-center justify-end md:ml-[0] ml-[228px] p-2.5 w-[100px]">
                    <Img
                      className="h-[79px] w-[79px]"
                      src="images/img_arrowright.svg"
                      alt="arrowright_Two"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="bg-blue_gray-50 flex md:flex-1 flex-col justify-end p-[15px] rounded-[10px] w-[47%] md:w-full">
                    <Img
                      className="h-9 md:ml-[0] ml-[119px] mr-[114px] mt-3.5"
                      src="images/img_star.svg"
                      alt="star"
                    />
                    <Text
                      className="md:ml-[0] ml-[5px] mt-[19px] text-black-900 text-center text-xs tracking-[2.50px] uppercase w-[99%] sm:w-full"
                      size="txtPoppinsExtraBold12Black900"
                    >
                      {props?.description}
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[152px] mr-[197px] mt-[18px] text-black-900 text-xs tracking-[2.50px] uppercase"
                      size="txtPoppinsExtraBold12Black900"
                    >
                      {props?.name}
                    </Text>
                    <Text
                      className="mb-2 md:ml-[0] mt-11 mx-[166px] text-blue-800 text-xs tracking-[2.50px] uppercase w-[29%] sm:w-full"
                      size="txtPoppinsExtraBold12Blue800"
                    >
                      {props?.grade}
                    </Text>
                  </div>
                  <div className="bg-blue_gray-50 flex md:flex-1 flex-col items-end justify-start overflow-auto pl-5 rounded-[10px] w-[47%] md:w-full">
                    <div className="overflow-x-auto w-full">
                      <div className="flex md:flex-col flex-row md:gap-[45px] items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col justify-start w-[47%] md:w-full">
                          <Img
                            className="h-9 md:ml-[0] ml-[114px]"
                            src="images/img_star.svg"
                            alt="star_One"
                          />
                          <Text
                            className="mt-[19px] text-black-900 text-center text-xs tracking-[2.50px] uppercase w-full"
                            size="txtPoppinsExtraBold12Black900"
                          >
                            {props?.descriptionSixteen}
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[147px] mt-[18px] text-black-900 text-xs tracking-[2.50px] uppercase"
                            size="txtPoppinsExtraBold12Black900"
                          >
                            {props?.ivanamoseriOne}
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[162px] mt-11 text-blue-800 text-xs tracking-[2.50px] uppercase w-[29%] sm:w-full"
                            size="txtPoppinsExtraBold12Blue800"
                          >
                            {props?.studentgradeOne}
                          </Text>
                        </div>
                        <div className="h-[338px] relative w-1/2 md:w-full">
                          <div className="absolute bg-blue_gray-50 h-[338px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[93%]">
                            <Img
                              className="h-9"
                              src="images/img_star_amber_500.svg"
                              alt="star_Two"
                            />
                            <Text
                              className="mt-[19px] text-black-900 text-center text-xs tracking-[2.50px] uppercase w-full"
                              size="txtPoppinsExtraBold12Black900"
                            >
                              {props?.descriptionSeventeen}
                            </Text>
                            <Text
                              className="mt-[81px] text-blue-800 text-xs tracking-[2.50px] uppercase w-[29%] sm:w-full"
                              size="txtPoppinsExtraBold12Blue800"
                            >
                              {props?.studentgradeTwo}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-end md:pl-10 sm:pl-5 pl-[68px] py-[68px]">
                    <Text
                      className="mt-[159px] text-black-900 text-xs tracking-[2.50px] uppercase w-full"
                      size="txtPoppinsExtraBold12Black900"
                    >
                      {props?.ivanamoseriTwo}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C01HomepageTestimonial.defaultProps = {
  text: "What our amazing users say",
  hereswhatsome: "Here’s what some of our users have to say about Proliferate",
  description: (
    <>
      I can&#39;t recommend this online tutoring service enough!!!! <br />
      My tutor went above and beyond to explain concepts clearly,
      <br />
      making mathematics really enjoyable. His competence and <br />
      flexibility have made a significant impact on my academic <br />
      progress.
    </>
  ),
  name: "Ivana Moseri",
  grade: "Student | Grade 9",
  descriptionSixteen: (
    <>
      I can&#39;t recommend this online tutoring service enough!!!! <br />
      My tutor went above and beyond to explain concepts clearly,
      <br />
      making mathematics really enjoyable. His competence and <br />
      flexibility have made a significant impact on my academic <br />
      progress.
    </>
  ),
  ivanamoseriOne: "Ivana Moseri",
  studentgradeOne: "Student | Grade 9",
  descriptionSeventeen: (
    <>
      I can&#39;t recommend this online tutoring service enough!!!! <br />
      My tutor went above and beyond to explain concepts clearly,
      <br />
      making mathematics really enjoyable. His competence and <br />
      flexibility have made a significant impact on my academic <br />
      progress.
    </>
  ),
  studentgradeTwo: "Student | Grade 9",
  ivanamoseriTwo: "Ivana Moseri",
};

export default C01HomepageTestimonial;
