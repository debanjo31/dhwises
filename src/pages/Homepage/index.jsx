import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import C01HomepageChildprogress from "components/C01HomepageChildprogress";
import C01HomepageColumnFour from "components/C01HomepageColumnFour";
import C01HomepageHeader from "components/C01HomepageHeader";
import C01HomepageHero from "components/C01HomepageHero";
import C01HomepageHowitworks from "components/C01HomepageHowitworks";
import C01HomepageLivevideo from "components/C01HomepageLivevideo";
import C01HomepagePaymentsection from "components/C01HomepagePaymentsection";
import C01HomepageTestimonial from "components/C01HomepageTestimonial";
import C01HomepageTutorsection from "components/C01HomepageTutorsection";
import ContactUsColumn from "components/ContactUsColumn";

const HomepagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto pt-7 w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <header className="flex flex-col items-center justify-center md:px-5 w-full">
            <C01HomepageHeader className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[95px] mr-[17px] w-[93%]" />
          </header>
          <div className="flex flex-col items-center justify-start mt-[19px] w-full">
            <div className="md:h-[619px] h-[875px] md:px-5 relative w-full">
              <C01HomepageHero className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full" />
              <C01HomepageLivevideo
                className="absolute bg-black-900 bg-cover bg-no-repeat bottom-[0] flex flex-col h-[367px] inset-x-[0] items-center justify-start mx-auto p-[21px] sm:px-5 rounded-[30px] shadow-bs1 w-[52%]"
                style={{ backgroundImage: "url('images/img_livevideo.png')" }}
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start md:ml-[0] ml-[179px] mt-[17px] md:px-5 w-[52%] md:w-full">
            <div className="md:h-[349px] h-[352px] relative w-[42%] md:w-full">
              <div className="absolute bg-gray-100 flex flex-col gap-6 h-max inset-[0] items-center justify-center m-auto p-[7px] rounded-[25px] w-full">
                <Text
                  className="mt-[84px] text-base text-black-900 text-center tracking-[2.50px] uppercase"
                  size="txtPoppinsExtraBold16"
                >
                  Live Sessions
                </Text>
                <Text
                  className="text-blue_gray-400 text-center text-xs tracking-[2.50px] uppercase"
                  size="txtPoppinsExtraBold12"
                >
                  <>
                    Experience the future of learning with <br />
                    our captivating live sessions. Engage with <br />
                    experts, ask questions in real-time, and master <br />
                    your subjects effortlessly from the comfort <br />
                    of your home.
                  </>
                </Text>
                <a
                  href="javascript:"
                  className="text-blue-800 text-center text-xs tracking-[2.50px] uppercase"
                >
                  <Text size="txtPoppinsExtraBold12Blue800">Learn More</Text>
                </a>
              </div>
              <Img
                className="absolute h-[67px] inset-x-[0] mx-auto top-[0] w-[68px]"
                src="images/img_livestreaming_red_400.svg"
                alt="livestreaming_One"
              />
            </div>
            <div className="flex flex-col justify-start w-[58%] md:w-full">
              <div className="flex flex-row items-center justify-between mr-[50px] w-[89%] md:w-full">
                <div className="h-[74px] relative w-[52%]">
                  <Text
                    className="absolute right-[0] text-black-900 text-center text-xs top-[23%] tracking-[2.50px] uppercase"
                    size="txtPoppinsExtraBold12Black900"
                  >
                    24/7 Support
                  </Text>
                  <Img
                    className="absolute h-[74px] inset-y-[0] left-[0] my-auto"
                    src="images/img_trash.svg"
                    alt="trash"
                  />
                </div>
                <Img
                  className="h-[66px] w-[66px]"
                  src="images/img_save.svg"
                  alt="save"
                />
              </div>
              <Text
                className="md:ml-[0] ml-[223px] mt-[41px] text-black-900 text-center text-xs tracking-[2.50px] uppercase"
                size="txtPoppinsExtraBold12Black900"
              >
                Quizzes & Assessments
              </Text>
              <div className="h-[352px] md:h-[373px] md:ml-[0] ml-[42px] mt-6 relative w-[73%]">
                <div className="absolute bg-gray-100 flex flex-col gap-6 h-max inset-[0] items-center justify-center m-auto p-[7px] rounded-[25px] w-full">
                  <Text
                    className="mt-[84px] text-base text-black-900 text-center tracking-[2.50px] uppercase"
                    size="txtPoppinsExtraBold16"
                  >
                    Live Sessions
                  </Text>
                  <Text
                    className="text-blue_gray-400 text-center text-xs tracking-[2.50px] uppercase"
                    size="txtPoppinsExtraBold12"
                  >
                    <>
                      Experience the future of learning with <br />
                      our captivating live sessions. Engage with <br />
                      experts, ask questions in real-time, and master <br />
                      your subjects effortlessly from the comfort <br />
                      of your home.
                    </>
                  </Text>
                  <a
                    href="javascript:"
                    className="text-blue-800 text-center text-xs tracking-[2.50px] uppercase"
                  >
                    <Text size="txtPoppinsExtraBold12Blue800">Learn More</Text>
                  </a>
                </div>
                <Img
                  className="absolute h-[67px] inset-x-[0] mx-auto top-[0] w-[68px]"
                  src="images/img_livestreaming_red_400.svg"
                  alt="livestreaming_Two"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[115px] pl-[21px] md:px-5 w-[96%] md:w-full">
            <C01HomepageColumnFour className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full" />
          </div>
          <div className="flex flex-col items-end justify-start max-w-[1254px] mt-[17px] mx-auto pl-[209px] md:px-5 w-full">
            <C01HomepageChildprogress className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full" />
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1426px] mx-auto md:px-5 w-full">
            <div className="md:h-[1764px] sm:h-[1981px] h-[2107px] pb-[164px] relative w-full">
              <div className="absolute bottom-[8%] md:h-[1231px] h-[1492px] sm:h-[1981px] inset-x-[0] mx-auto w-[90%] md:w-full">
                <C01HomepagePaymentsection className="absolute bottom-[0] flex flex-col gap-[62px] inset-x-[0] items-center justify-center max-w-[1278px] mx-auto w-full" />
                <C01HomepageTutorsection
                  className="absolute flex flex-col h-[823px] md:h-auto inset-x-[0] items-center justify-between mx-auto top-[0] w-auto"
                  meetsomeofour={
                    <Text className="absolute font-extrabold left-[0] text-black-900 text-xs top-[21%] tracking-[2.50px] uppercase">
                      <span className="text-black-900 font-poppins text-left">
                        <>
                          Meet Some of Our <br />
                        </>
                      </span>
                      <span className="text-blue-800 font-poppins text-left">
                        Prolific{" "}
                      </span>
                      <span className="text-black-900 font-poppins text-left">
                        Tutors
                      </span>
                    </Text>
                  }
                />
              </div>
              <C01HomepageHowitworks className="absolute flex flex-col gap-6 h-[473px] md:h-auto inset-x-[0] items-center justify-between mx-auto top-[0] w-auto" />
            </div>
          </div>
          <div className="flex flex-col items-end justify-start mt-[23px] pl-[171px] md:px-5 w-[89%] md:w-full">
            <C01HomepageTestimonial className="flex flex-col items-center justify-start w-full" />
          </div>
          <div className="h-[468px] md:h-[520px] max-w-[1429px] mt-[52px] mx-auto md:px-5 relative w-full">
            <Img
              className="h-[468px] m-auto object-cover w-full"
              src="images/img_rectangle243.png"
              alt="rectangle243"
            />
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[36%]">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue-800 text-center tracking-[2.50px] uppercase"
                size="txtPoppinsExtraBold32"
              >
                <>
                  Looking for <br />a tutor?{" "}
                </>
              </Text>
              <Text
                className="mt-[31px] text-2xl md:text-[22px] text-black-900_01 text-center sm:text-xl tracking-[2.50px] uppercase"
                size="txtPoppinsExtraBold24"
              >
                <>
                  Discover your perfect tutor in our library <br />
                  and start learning!
                </>
              </Text>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[297px] mt-[66px] text-2xl md:text-[22px] text-center sm:text-xl tracking-[2.50px] uppercase"
                shape="round"
                color="blue_800"
                size="sm"
                variant="fill"
              >
                Find Your Tutor
              </Button>
            </div>
          </div>
          <footer className="flex items-center justify-center md:px-5 w-full">
            <div className="h-[578px] sm:h-[593px] md:h-[944px] relative w-full">
              <Img
                className="h-[578px] m-auto object-cover w-full"
                src="images/img_rectangle19.png"
                alt="rectangleNineteen"
              />
              <ContactUsColumn
                className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto p-[34px] sm:px-5 w-full"
                subscribebutton="Subscribe"
              />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
