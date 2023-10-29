import React from "react";

import { Img, Text } from "components";

const C01HomepageHero = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-blue-800 bg-cover bg-no-repeat md:h-[619px] h-[692px] relative w-full"
          style={{ backgroundImage: "url('images/img_hero.png')" }}
        >
          <div className="absolute bottom-[0] h-[619px] right-[0] w-[94%] md:w-full">
            <Img
              className="absolute h-[619px] inset-y-[0] my-auto object-cover right-[0] w-[620px]"
              src="images/img_rectangle186.png"
              alt="rectangle186"
            />
            <Text
              className="absolute left-[0] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 top-[9%] tracking-[2.50px] uppercase w-[59%] sm:w-full"
              size="txtPoppinsExtraBold48"
            >
              {props?.description}
            </Text>
            <div className="absolute bg-white-A700 bottom-[41%] flex sm:flex-col flex-row sm:gap-10 items-center justify-between left-[0] p-3.5 rounded-[25px] w-[53%]">
              <div className="flex flex-col items-start justify-start ml-4 sm:ml-[0] pb-[18px] pr-[18px]">
                <Text
                  className="text-gray-500 text-xs tracking-[2.50px] uppercase"
                  size="txtPoppinsExtraBold12Gray500"
                >
                  {props?.searchtext}
                </Text>
              </div>
              <Img
                className="h-[53px] md:h-auto mr-2.5 object-cover"
                src="images/img_search_53x61.png"
                alt="search"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C01HomepageHero.defaultProps = {
  description: (
    <>
      Maximizing Potentials <br />
      Raising High Flyers
      <br />
      One Session at A Time
    </>
  ),
  searchtext: "Search for subject or tutor...",
};

export default C01HomepageHero;
