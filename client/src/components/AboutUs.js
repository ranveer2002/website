import React from "react";
import aboutimg from "./sliderasset/about.png";
import map from "../assets/map.png";
const AboutUs = () => {
  return (
    <div className="flex flex-col w-[1280px] mx-auto bg-white">
      <div className="flex flex-col w-full max-md:px-5">
        <div className="self-center text-5xl font-semibold text-center text-black mt-14 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          Meet the Faces Fueling Your
          <br />
          Wellness at Physioplus
        </div>
        <img
          loading="lazy"
          srcSet={aboutimg}
          alt="aboutimg"
          className="aspect-[1.32] object-contain object-center overflow-hidden self-center max-w-full mt-7 max-md:mt-10"
        />
        <div className="self-start w-[34%] mt-16 text-xl text-center text-black whitespace-nowrap">
          Our story
        </div>
        <div className="text-black text-4xl font-medium ml-36 w-[70%] mt-1.5 self-start">
          At PhysioPlus, We Embrace the
          <div className="text-4xl text-black">
            Nuances of Health and Physiotherapy
          </div>
        </div>
        <div className="self-center w-[954px] max-w-full ">
          <div className="text-black text-lg self-center ml-0 w-[1072px] mt-12 max-md:max-w-full max-md:mt-10">
            At PhysioPlus, we grasp the intricate dynamics of health and
            physiotherapy. We appreciate the uniqueness of each individual's
            well-being journey and tailor our approach accordingly. Our team of
            experts understands the intricate interplay of muscles, bones.
          </div>{" "}
          <div className="text-black text-lg self-center ml-0 w-[1085px] mt-4 max-md:max-w-full">
            We acknowledge the holistic nature of health, considering mental and
            emotional well-being in conjunction with physical health. Whether
            you're recovering from an injury, managing a chronic condition, or
            aiming for improved health and mobility.
          </div>
          <div className="text-black text-lg self-center ml-0 w-[1088px] mt-4 max-md:max-w-full">
            Incorporating the latest advancements and compassionate care, we
            strive to provide the most effective and supportive services. At
            PhysioPlus, we embrace the complexities of health, offering tailored
            expertise to guide you on your path to better well-being. Join us
            and experience the difference that dedicated{" "}
            <span className="bg-yellow-200 -p-2 ">understanding can make.</span>
          </div>
        </div>
        <div className="text-black text-4xl font-bold leading-[50.25599999999999px] self-center whitespace-nowrap mt-20 max-md:mt-10">
          Meet our team
        </div>
        <div className="self-center w-[902px] max-w-full mt-14 max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:mt-9">
                <div className="bg-zinc-300 self-stretch flex w-full h-[233px] flex-col rounded-2xl" />
                <div className="text-black text-xl font-medium leading-7 self-stretch whitespace-nowrap mt-2.5">
                  Vidhan Solanki
                </div>
                <div className="self-stretch text-sm leading-5 text-black whitespace-nowrap">
                  Chief Executive Officer, Co-Founder
                </div>
                <div className="text-black text-base leading-6 self-stretch mt-2.5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col mt-1 grow max-md:mt-10">
                <div className="bg-zinc-300 self-stretch flex w-full h-[233px] flex-col rounded-2xl" />{" "}
                <div className="text-black text-xl font-medium leading-7 self-stretch whitespace-nowrap mt-2.5">
                  Vidhan Solanki
                </div>{" "}
                <div className="self-stretch text-sm leading-5 text-black whitespace-nowrap">
                  Chief Executive Officer, Co-Founder
                </div>{" "}
                <div className="text-black text-base leading-6 self-stretch mt-2.5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col mt-1 grow max-md:mt-10">
                <div className="bg-zinc-300 self-stretch flex w-full h-[233px] flex-col rounded-2xl" />
                <div className="text-black text-xl font-medium leading-7 self-stretch whitespace-nowrap mt-2.5">
                  Vidhan Solanki
                </div>
                <div className="self-stretch text-sm leading-5 text-black whitespace-nowrap">
                  Chief Executive Officer, Co-Founder
                </div>
                <div className="text-black text-base leading-6 self-stretch mt-2.5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="rounded-lg w-[69px] h-[3.1px] mx-auto mt-[70px] opacity-70 bg-green-700"></hr>
        <div className="self-center mt-5 text-2xl leading-8 text-black whitespace-nowrap max-md:max-w-full max-md:mt-10">
          but it's not just us ... we have a whole team of angels, advisers and
          mentors backing us up.
        </div>
        <div className="rounded-lg w-[69px] h-[2.7px] mx-auto mt-7 opacity-70 bg-green-700"></div>
        <div className="self-center mt-32 text-4xl font-bold text-black whitespace-nowrap max-md:mt-10">
          Mission
        </div>
      </div>
      <div className="bg-zinc-300 self-center flex w-[1069px] h-[432px] flex-col mt-12 rounded-2xl max-md:max-w-full max-md:mt-10" />
      <div className="text-black text-center text-lg leading-10 self-center w-[1142px] max-w-[1084px] mt-8 max-md:max-w-full">
        At Physioplus, our mission is simple: to accelerate recovery and enhance
        performance. We're your partner in personalized physiotherapy and home
        treatment solutions.
      </div>{" "}
      <div className="text-black text-4xl font-bold leading-[50.25599999999999px] self-center whitespace-nowrap mt-28 max-md:mt-10">
        Our &quot;Aha!&quot; Moment
      </div>{" "}
      <div className="self-center w-full max-w-[1105px] mt-12 px-5 max-md:max-w-full max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[41%] max-md:w-full max-md:ml-0">
            <div className="bg-zinc-300 flex w-[435px] h-[343px] flex-col mx-auto rounded-2xl max-md:max-w-full max-md:mt-8" />
          </div>{" "}
          <div className="flex flex-col items-stretch w-[59%] ml-5 max-md:w-full max-md:ml-0">
            <div className="text-black text-lg leading-10 w-[639px] max-w-[639px] my-auto max-md:max-w-full max-md:mt-10">
              Our breakthrough moment came when we realized the profound impact
              our services were making on athletes and individuals recovering
              from injuries. Witnessing their journeys from pain and frustration
              to triumph and excellence solidified our commitment to making a
              difference in the lives of those we serve.
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="text-black text-center text-4xl font-bold leading-[50.25599999999999px] self-center max-w-[1069px] mt-28 max-md:mt-10">
        How We've Evolved
      </div>
      <div className="bg-zinc-300 self-center flex w-[1069px] h-[432px] flex-col mt-12 rounded-2xl max-md:max-w-full max-md:mt-10" />
      <div className="text-black text-center text-lg leading-10 self-center w-[1147px] max-w-[1122px] -ml-5 mt-8 max-md:max-w-full">
        We've grown by embracing technology and collaborating with top
        physiotherapists. We now serve a broader audience, leading in
        physiotherapy consultancy and home treatment.
      </div>
      <div className="text-black text-4xl font-semibold leading-[50px] self-center whitespace-nowrap mt-36 max-md:mt-10">
        Why PhysioPlus?
      </div>
      <div className="text-black text-center text-lg leading-8 self-center w-[971px] max-w-[930px] mt-3 max-md:max-w-full">
        Our breakthrough moment came when we realized the profound impact our
        services were making on athletes and individuals
      </div>
      <div className="bg-zinc-50 self-stretch w-full mt-36 pl-16 pr-36 py-9 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src={map}
              alt="map"
              className="aspect-[1.21] object-contain object-center w-[557px] overflow-hidden max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[56%] ml-6 max-md:w-full max-md:ml-0">
            <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-black text-right text-2xl font-semibold max-w-[428px] self-end">
                Locate Offline Onboarding
              </div>
              <div className="text-zinc-500 text-right text-lg mt-6 self-end max-md:max-w-full">
                Experience Swift and Hassle-Free Onboarding with PhysioPlus
              </div>
              <button className="text-white text-center text-lg font-semibold whitespace-nowrap bg-green-500 w-[148px] max-w-full grow mt-16  py-3 rounded-md self-end max-md:mt-10">
                Connect Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
