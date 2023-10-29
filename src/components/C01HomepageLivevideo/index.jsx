import React from "react";

import { Button, Img, Text } from "components";

const C01HomepageLivevideo = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_livevideo.png')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[158px] items-center justify-start mb-3 w-[96%] md:w-full">
          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 tracking-[2.50px] uppercase"
              size="txtPoppinsExtraBold32WhiteA700"
            >
              {props?.language}
            </Text>
            <div className="bg-white-A700 flex flex-row gap-[3px] items-center justify-start sm:mt-0 mt-1.5 p-[5px] rounded-[10px] w-auto">
              <Img
                className="h-16 w-10"
                src="images/img_livestreaming.svg"
                alt="livestreaming"
              />
              <Text
                className="text-base text-black-900 text-center tracking-[2.50px] uppercase w-[41px]"
                size="txtPoppinsExtraBold16"
              >
                {props?.live}
              </Text>
            </div>
          </div>
          <div className="flex flex-row sm:gap-10 items-start justify-between w-[99%] md:w-full">
            <Button
              className="!text-white-A700 cursor-pointer font-extrabold font-poppins leading-[normal] mb-0.5 min-w-[224px] rounded-[25px] text-2xl md:text-[22px] text-center sm:text-xl tracking-[2.50px] uppercase"
              color="gray_900"
              size="md"
              variant="fill"
            >
              {props?.joinClass}
            </Button>
            <div className="flex flex-col items-start justify-start mt-[5px] w-auto">
              <div className="relative w-full">
                <div className="m-auto w-full">
                  <div className="m-auto w-full">
                    <div className="m-auto w-full">
                      <Text
                        className="mx-auto text-center text-white-A700 text-xs tracking-[2.50px] uppercase w-full"
                        size="txtPoppinsExtraBold12WhiteA700"
                      >
                        {props?.p15studentsjoineone}
                      </Text>
                      <Img
                        className="absolute bottom-[0] h-9 right-[0] rounded-[50%] w-9"
                        src="images/img_ellipse9.png"
                        alt="ellipseNine"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[0] h-9 right-[20%] rounded-[50%] w-9"
                      src="images/img_ellipse8.png"
                      alt="ellipseEight"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[0] h-9 left-[23%] rounded-[50%] w-9"
                    src="images/img_ellipse7.png"
                    alt="ellipseSeven"
                  />
                </div>
                <Img
                  className="absolute bottom-[0] h-9 left-[0] rounded-[50%] w-9"
                  src="images/img_ellipse6.png"
                  alt="ellipseSix"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C01HomepageLivevideo.defaultProps = {
  language: "English Language Class",
  live: "Live",
  joinClass: "Join Class",
  p15studentsjoineone: "15 Students Joined",
};

export default C01HomepageLivevideo;
