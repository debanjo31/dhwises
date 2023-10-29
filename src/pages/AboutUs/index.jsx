import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import C02AboutUsRowasseteleven from "components/C02AboutUsRowasseteleven";
import ContactUsColumn from "components/ContactUsColumn";

const AboutUsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-[13px] items-center justify-end mx-auto pt-11 w-full">
        <div className="h-16 md:h-[271px] max-w-[1294px] mx-auto md:px-5 relative w-full">
          <div className="bg-red-700_01 flex flex-col h-full items-center justify-start ml-[424px] my-auto w-[10%]">
            <div className="bg-deep_orange-800 h-[34px] rounded-[17px] w-full"></div>
          </div>
          <C02AboutUsRowasseteleven className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-center justify-center m-auto w-full" />
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[394px] max-w-[1432px] mx-auto md:px-5 relative w-full">
            <Img
              className="h-[394px] m-auto object-cover w-full"
              src="images/img_rectangle188_394x1432.png"
              alt="rectangle188"
            />
            <Text
              className="absolute inset-x-[0] mx-auto text-center text-white-A700 text-xs top-[36%] tracking-[2.50px] uppercase w-max"
              size="txtPoppinsExtraBold12WhiteA700"
            >
              About Us
            </Text>
          </div>
          <div className="h-[1055px] sm:h-[1215px] md:h-[693px] mt-[104px] md:px-5 relative w-full">
            <div className="absolute sm:h-[1111px] h-[589px] inset-x-[0] mx-auto top-[0] w-[92%] md:w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-start w-full">
                  <Img
                    className="h-[589px] rounded-[30px]"
                    src="images/img_rectangle191.svg"
                    alt="rectangle191"
                  />
                  <Text
                    className="sm:mt-0 mt-[76px] text-black-900 text-xs tracking-[2.50px] uppercase"
                    size="txtPoppinsExtraBold12Black900"
                  >
                    <>
                      Welcome To Proliferate Online Tutoring Service <br />
                      Where Your Child Will Experience Exponential Growth <br />
                      With Our Comprehensive Tutoring Service! We have a <br />
                      large team of passionate educators and experts who are{" "}
                      <br />
                      dedicated to making quality education accessible to all.{" "}
                      <br />
                      <br />
                      We understand that each student is unique, with their own{" "}
                      <br />
                      strengths and challenges, and that&#39;s why we offer a
                      diverse <br />
                      range of experienced tutors specializing in various
                      subjects
                      <br /> and educational levels. Whether you need help with
                      complex <br />
                      math problems, computing, reading, writing, mastering a{" "}
                      <br />
                      foreign language, or acing a science project, we&#39;ve
                      got you <br />
                      covered.
                    </>
                  </Text>
                </div>
              </div>
              <Img
                className="absolute bottom-[2%] h-[539px] left-[5%] object-cover rounded-[30px] w-[35%]"
                src="images/img_rectangle190.png"
                alt="rectangle190"
              />
            </div>
            <Text
              className="absolute left-[42%] text-blue-800 text-xs top-[2%] tracking-[2.50px] uppercase"
              size="txtPoppinsExtraBold12Blue800"
            >
              About Us
            </Text>
            <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[142px] inset-x-[0] justify-start mx-auto w-full">
              <Text
                className="md:ml-[0] ml-[656px] text-gray-500_01 text-xs tracking-[2.50px] uppercase"
                size="txtPoppinsExtraBold12Gray50001"
              >
                “
              </Text>
              <div className="bg-gray-200 flex flex-col justify-start p-[68px] md:px-10 sm:px-5 w-full">
                <Text
                  className="md:ml-[0] ml-[494px] text-blue-800 text-center text-xs tracking-[2.50px] uppercase"
                  size="txtPoppinsExtraBold12Blue800"
                >
                  <>
                    Proliferate Tutoring is beyond a <br />
                    business, It&#39;s a Vision
                  </>
                </Text>
                <Text
                  className="md:ml-[0] ml-[583px] mt-[81px] text-gray-500_01 text-xs tracking-[2.50px] uppercase"
                  size="txtPoppinsExtraBold12Gray50001"
                >
                  ”
                </Text>
                <Text
                  className="mb-[39px] md:ml-[0] ml-[411px] mr-[573px] mt-[15px] text-black-900 text-xs tracking-[2.50px] uppercase"
                  size="txtPoppinsExtraBold12Black900"
                >
                  SEE OUR VISION STATEMENT & PURPOSE
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-1 md:px-5 relative w-full">
            <div className="bg-gray-100_01 flex flex-col items-center justify-start mx-auto p-[55px] md:px-10 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[76px] items-start justify-start mb-2 w-[82%] md:w-full">
                <div className="bg-white-A700 flex flex-col gap-[58px] items-start justify-start p-3 rounded-[10px] shadow-bs">
                  <Text
                    className="ml-3 md:ml-[0] text-blue-800 text-xs tracking-[2.50px] uppercase"
                    size="txtPoppinsExtraBold12Blue800"
                  >
                    Our Vision
                  </Text>
                  <Text
                    className="mb-[47px] md:ml-[0] ml-[17px] text-black-900 text-xs tracking-[2.50px] uppercase w-[95%] sm:w-full"
                    size="txtPoppinsExtraBold12Black900"
                  >
                    Our vision is to create a world where knowledge knows no
                    bounds, where anyone can effortlessly access a diverse pool
                    of expert tutors. Through cutting-edge technology and
                    innovation, we are committed to providing a seamless
                    platform that connects learners with exceptional tutors. We
                    strive to make learning opportunities readily available to
                    all, fostering a nurturing environment that empowers
                    individuals to achieve their educational goals with
                    confidence and ease.
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col gap-[58px] items-start justify-start mb-[47px] p-3 rounded-[10px] shadow-bs">
                  <Text
                    className="ml-3 md:ml-[0] text-blue-800 text-xs tracking-[2.50px] uppercase"
                    size="txtPoppinsExtraBold12Blue800"
                  >
                    Our Mission
                  </Text>
                  <Text
                    className="mb-[30px] md:ml-[0] ml-[17px] text-black-900 text-xs tracking-[2.50px] uppercase w-[95%] sm:w-full"
                    size="txtPoppinsExtraBold12Black900"
                  >
                    Our mission is to empower learners with the knowledge and
                    skills they need to succeed, bridging the gap between
                    aspiration and achievement.
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start ml-auto mt-[-214px] w-[84%] z-[1]">
              <div className="flex flex-col gap-[23px] justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[323px] w-[74%] md:w-full">
                  <Text
                    className="md:mt-0 mt-[273px] text-blue-800 text-center text-xs tracking-[2.50px] uppercase"
                    size="txtPoppinsExtraBold12Blue800"
                  >
                    <>
                      Unleash Your Academic Potential, <br />
                      One session at a time
                    </>
                  </Text>
                  <div className="h-[381px] relative w-[36%] md:w-full">
                    <Img
                      className="absolute h-[381px] inset-[0] justify-center m-auto object-cover rounded-[30px]"
                      src="images/img_rectangle198.png"
                      alt="rectangle198"
                    />
                    <Img
                      className="absolute bottom-[2%] h-[349px] inset-x-[0] mx-auto object-cover rounded-[30px] w-[97%]"
                      src="images/img_rectangle199.png"
                      alt="rectangle199"
                    />
                  </div>
                </div>
                <Text
                  className="mr-[239px] text-black-900 text-center text-xs tracking-[2.50px] uppercase w-[81%] sm:w-full"
                  size="txtPoppinsExtraBold12Black900"
                >
                  <>
                    PROLIFERATE® is your gateway to unlocking the power of
                    limitless learning.  We believe that the path to academic
                    excellence and life’s successes doesn&#39;t have to be long
                    and arduous. By providing access to experienced mentors and
                    expert tutors, we offer you the opportunity to fast-track
                    your learning journey in any subject area of your interest.
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 flex flex-col md:gap-10 gap-32 items-center justify-start mt-[83px] p-10 sm:px-5 w-full">
            <Text
              className="text-blue-800 text-center text-xs tracking-[2.50px] uppercase"
              size="txtPoppinsExtraBold12Blue800"
            >
              <>
                Breaking Barriers
                <br />
                Building Brighter Futures One Session at a Time.
              </>
            </Text>
            <div className="flex flex-row sm:gap-10 gap-[114px] items-center justify-between mb-[76px] md:px-5 w-auto md:w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-[11%]">
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_chalkboardteacher.svg"
                  alt="chalkboardteach"
                />
                <Text
                  className="text-black-900 text-center text-xs tracking-[2.50px] uppercase"
                  size="txtPoppinsExtraBold12Black900"
                >
                  <span className="text-blue-800 font-poppins font-extrabold">
                    <>
                      55+
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-400 font-poppins font-extrabold">
                    Tutors
                  </span>
                </Text>
              </div>
              <div className="flex flex-col gap-6 items-center justify-start w-[12%]">
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_bookbookmark.svg"
                  alt="bookbookmark"
                />
                <Text
                  className="text-black-900 text-center text-xs tracking-[2.50px] uppercase"
                  size="txtPoppinsExtraBold12Black900"
                >
                  <span className="text-blue-800 font-poppins font-extrabold">
                    <>
                      5+
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-400 font-poppins font-extrabold">
                    Subjects
                  </span>
                </Text>
              </div>
              <div className="flex flex-col gap-6 items-center justify-start w-[14%]">
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_globehemispherewest.svg"
                  alt="globehemisphere"
                />
                <Text
                  className="text-black-900 text-center text-xs tracking-[2.50px] uppercase"
                  size="txtPoppinsExtraBold12Black900"
                >
                  <span className="text-blue-800 font-poppins font-extrabold">
                    <>
                      5+
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-400 font-poppins font-extrabold">
                    Countries
                  </span>
                </Text>
              </div>
              <div className="flex flex-col gap-6 items-center justify-start w-[13%]">
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_personarmsspread.svg"
                  alt="personarmssprea"
                />
                <Text
                  className="text-black-900 text-center text-xs tracking-[2.50px] uppercase"
                  size="txtPoppinsExtraBold12Black900"
                >
                  <span className="text-blue-800 font-poppins font-extrabold">
                    <>
                      40+
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-400 font-poppins font-extrabold">
                    Students
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[962px] mt-[90px] mx-auto md:px-5 w-full">
            <Text
              className="text-blue-800 text-center text-xs tracking-[2.50px] uppercase"
              size="txtPoppinsExtraBold12Blue800"
            >
              Commitment to our learners
            </Text>
            <Text
              className="mt-[73px] text-black-900 text-center text-xs tracking-[2.50px] uppercase w-full"
              size="txtPoppinsExtraBold12Black900"
            >
              We are committed to nurturing a positive and supportive learning
              environment. We strive to instill in our students the confidence
              to face challenges head-on and embrace the joy of learning. As
              partners in your academic journey, we celebrate your successes and
              are dedicated to overcoming any obstacles together.
            </Text>
            <Button
              className="cursor-pointer font-extrabold leading-[normal] min-w-[360px] mt-[35px] text-center text-xs tracking-[2.50px] uppercase"
              shape="round"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              Become a Student
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[962px] mt-[81px] mx-auto md:px-5 w-full">
            <Text
              className="text-blue-800 text-center text-xs tracking-[2.50px] uppercase"
              size="txtPoppinsExtraBold12Blue800"
            >
              <>
                Join Our Community of Educators: <br />
                Become a PROLIFERATE® Online Tutor Today!
              </>
            </Text>
            <Text
              className="mt-[106px] text-black-900 text-center text-xs tracking-[2.50px] uppercase w-full"
              size="txtPoppinsExtraBold12Black900"
            >
              Embrace your unique voice and share your wisdom at PROLIFERATE®,
              where we believe everyone has something valuable to offer as an
              online tutor. Join us now!
            </Text>
            <Button
              className="cursor-pointer font-extrabold leading-[normal] min-w-[360px] mt-[42px] text-center text-xs tracking-[2.50px] uppercase"
              shape="round"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              Become a Tutor
            </Button>
          </div>
          <div className="h-[583px] sm:h-[643px] md:h-[994px] mt-[50px] md:px-5 relative w-full">
            <Img
              className="absolute h-[578px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_rectangle188.png"
              alt="rectangleNineteen"
            />
            <ContactUsColumn
              className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto p-[34px] sm:px-5 w-full"
              subscribebutton="Subscribe"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
