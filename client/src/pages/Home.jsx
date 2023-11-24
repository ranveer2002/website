import i1 from "../assets/image1.png";
import i2 from "../assets/image2.png";
import i3 from "../assets/image3.png";
import Slider from "../components/Slider";
import HomeImage from "../assets/HomeImage.png";
import HomeImage2 from "../assets/HomeImage2.png";
import HomeImage3 from "../assets/HomeImage3.png";
import HomeImage4 from "../assets/HomeImage4.png";
import HomeImage5 from "../assets/HomeImage5.png";
import HomeImage6 from "../assets/HomeImage6.png";
import blogimg from "../assets/blogimg.png";
import chechmark from "../assets/CheckMark.png";
import { useRef, useEffect } from "react";
// import { BiLogoWhatsappSquare } from "react-icons/bi";
import { Link } from "react-router-dom";
import CardCarousel from "../components/Carousel";
import VerticalScroll from "../components/VerticalScroll";
import SearchBar from "../components/SearchBar";
import Slidein from "../components/Slidein";
import botplay from "../assets/botplay.png";
import botlogo from "../assets/botlogo.png";
import whatsappimg from "../assets/whatsappimg.png";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
const Home = (props) => {
  let setIsLoginClicked = props.setIsLoginClicked;
  const [isbotplay, setisbotplay] = useState(false);
  const [ischat, setischat] = useState(false);
  const [iswhatsapp, setiswhatsapp] = useState(false);
  const [islistselected, setislistselected] = useState(false);
  const BotActiveHandler = () => {
    setisbotplay(!isbotplay);
  };
  const ChatHandler = () => {
    setischat(true);
    setiswhatsapp(false);
  };
  const WhatsappHandler = () => {
    setiswhatsapp(true);
    setischat(false);
  };
  const ListHandler = () => {
    setislistselected(!islistselected);
  };
  const questions = [
    "How do I book a physiotherapy appointment?",
    "Are there any physiotherapists in sports injuries?",
    "What should I bring to my first appointment?",
    "Can I receive therapy for chronic back pain?",
    "What's the cancellation policy for appointments?",
    "Can I reschedule my existing appointment?",
  ];
  const answers = [
    "I do know and i can help u",
    "I do know and i can help u",
    "I do know and i can help u",
    "I do know and i can help u",
    "I do know and i can help u",
    "I do know and i can help u",
  ];
  // const chatbotRef = useRef(null); // Create a ref for the chatbot container

  // useEffect(() => {
  //   // Create the script element
  //   const script = document.createElement("script");
  //   script.src = "https://www.chatbase.co/embed.min.js";
  //   script.async = true;
  //   script.defer = true;
  //   script.setAttribute("chatbotId", "RZAkBsSjRWLXNyiHTSWQx");
  //   script.setAttribute("domain", "www.chatbase.co");

  //   // Append the script to the document head
  //   document.head.appendChild(script);

  //   // Cleanup function to remove script when component unmounts
  //   return () => {
  //     document.head.removeChild(script);
  //   };
  // }, []); // Empty dependency array to only run once on mount

  // // ... other code
  return (
    <div className="">
      {/* <div ref={chatbotRef} style={{ height: "700px", width: "100%" }}></div> */}

      <button onClick={BotActiveHandler}>
        <img
          src={botplay}
          alt="img"
          className="z-50 w-[50px] h-[50px] fixed bottom-10 right-4"
        />
      </button>
      {isbotplay && (
        <div className=" border border-green-500 fixed bottom-[100px] right-10 z-50 w-[300px] h-[400px] flex flex-col bg-white rounded-xl shadow-lg">
          <div className="items-center justify-between p-4 bg-green-200 rounded-t-xl">
            <div
              className="text-green-700 bg-white rounded-full float-right -mt-7 -mr-6 hover:bg-green-100 border border-green-500 font-bold hover:cursor-pointer w-[30px] h-[30px] text-center justify-center flex"
              onClick={BotActiveHandler}
            >
              <span>x</span>
            </div>
            <img src={botlogo} alt="logo" className="w-[75px] h-[21px] ml-24" />
            <div className="flex flex-row mt-5 ml-3 space-x-2 ">
              <button
                className="w-[152px] h-[36px] text-green-700 text-md font-semibold bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onClick={WhatsappHandler}
              >
                Whatsapp
              </button>
              <button
                className="w-[152px] h-[36px] text-green-700 text-md font-semibold bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onClick={ChatHandler}
              >
                Chat to Bot
              </button>
            </div>
          </div>
          {isbotplay && !ischat && (
            <div className="flex flex-col items-center justify-center flex-1 px-4 py-4">
              <img
                src={whatsappimg}
                alt="iconimg"
                className="w-[200px] h-[200px]"
              />
              <button className="w-full max-w-[367px] h-[46px] text-lg text-white font-semibold bg-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50">
                <a
                  href="https://wa.me/9928088430"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on Whatsapp
                </a>
              </button>
            </div>
          )}
          {ischat && !iswhatsapp && (
            <div className="">
              <span className="w-[320px] h-[10px] font-bold text-[13px] mt-5 ml-1 text-center flex justify-center tracking-[-0.485px]">
                <iframe
                  src="https://www.chatbase.co/chatbot-iframe/RZAkBsSjRWLXNyiHTSWQx"
                  width="94%"
                  title="mybot"
                  frameborder="0"
                  className=" border border-green-500  h-[290px] -mt-6 rounded-bl-xl rounded-br-xl -ml-[30px]"
                />
              </span>
              {/* <ul className="mt-5 overflow-x-scroll rounded-lg h-[220px]">
                {questions.map((question, index) => (
                  <li key={index} className="flex justify-center mt-2 mb-2">
                    <button
                      className="w-[282px] h-[30px] p-2 text-center text-[10px] font-bold text-green-700 transition-colors bg-green-100 rounded-md hover:bg-green-200"
                      onClick={ListHandler}
                    >
                      {islistselected && question}
                    </button>
                  </li>
                ))}
              </ul> */}
              {/* <span>
               
              </span> */}
            </div>
          )}
        </div>
      )}

      <section className="w-full font-inter groupbgHomeSection">
        <div className=" w-[829px] h-[140px] font-bold text-black text-[52px] mx-auto py-20">
          <div className="ml-28">Free, Personalized Online</div>
          <div className="ml-24 -mt-4">Physiotherapy Health Care</div>
        </div>
        <div className="w-[1041px] font-normal text-zinc-500 text-[16px] mt-20 mx-auto">
          <div className="ml-14">
            Start improving phsyical health and well being today. Let PhysioPlus
            shows you how. Building Power to Build A Physically
          </div>
          <div className="ml-80">
            Healthy World : Supporting Sportsman carrer growth
          </div>
        </div>
        <div className="mt-16">
          <SearchBar />
        </div>
      </section>
      <section>
        <Slidein />
      </section>
      <section className="font-inter w-[1280px] mx-auto">
        <div className="mt-32 ml-12">
          <p className="text-[18px] font-semibold text-green-700 ml-1">
            Service
          </p>
          <div>
            <p className="w-[765px] h-[61px] text-[38px] font-semibold">
              Exceptional Services You Can Rely On
            </p>
            <p className="ml-1 text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              veniam{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-evenly mt-7">
          <div className="border w-[360px] h-[520px] rounded-2xl groupBgCard shadow-md">
            <div className="w-[318px] text-center mt-9 mx-auto">
              <p className="ml-3 text-3xl font-bold">
                Clinical Treatment Physiotherapy
              </p>
              {/* <p className="text-3xl font-bold ml-9"></p> */}
            </div>
            <div className="w-[293px] h-[45px] mt-5 text-[12px] font-normal text-slate-500 mx-auto">
              <p>High quality physiotherapy care at our PhysioPlus</p>
              <p>Centre near you. Best Treatment for Ortho / Neuro</p>
              <p className="ml-16">and many more Issues</p>
            </div>
            <div className="mt-8">
              <img
                src={i1}
                alt=""
                loading="lazy"
                className="w-[315px] h-[179px] rounded-lg mx-5"
              />
            </div>
            <button className="border border-zinc-400 text-green-700 text-[18px] font-semibold w-[305px] h-[48px] rounded-lg mx-6 mt-8 py-[10px] mb-6 hover:shadow-md transition-all 2s ease">
              Schedule a Treatment
            </button>
          </div>

          <div className="border w-[360px] h-[520px] rounded-2xl groupBgCard shadow-md">
            <div className="w-[318px] text-center mt-9 mx-auto">
              <p className="ml-3 text-3xl font-bold">
                Physio Home Visits Availability
              </p>
              {/* <p className="ml-16 text-3xl font-bold"></p> */}
            </div>
            <div className="w-[291px] h-[45px] mt-5 text-[12px] font-normal text-slate-500 mx-auto">
              <p className="ml-9">Home Visits by certified By PhysioPlus</p>
              <p>Physiotherapists for Patients with mobility issues &</p>
              <p className="ml-10">for patients looking for convenience</p>
            </div>
            <div className="mt-8 ">
              <img
                src={i2}
                alt=""
                loading="lazy"
                className="w-[315px] h-[179px] rounded-lg mx-5"
              />
            </div>
            <button className="border border-zinc-400 text-green-700 text-[18px] font-semibold w-[305px] h-[48px] rounded-lg mx-6 mt-8 py-[10px] mb-9 hover:shadow-md transition-all 2s ease">
              Schedule a Treatment
            </button>
          </div>

          <div className="border w-[360px] h-[520px] rounded-2xl groupBgCard shadow-md">
            <div className="w-[318px] text-center mt-9 mx-auto">
              <p className="ml-1 text-3xl font-bold">
                Expert Online Physiotherapy
              </p>
              {/* <p className="text-3xl font-bold"></p> */}
            </div>
            <div className="w-[291px] h-[45px] mt-5 text-[12px] font-normal text-slate-500 mx-auto">
              <p className="ml-5">
                Certified PhysioPlus therapists offer online
              </p>
              <p className="ml-1">
                sessions for patients with mobility challenges and
              </p>
              <p className="ml-16">those seeking convenience.</p>
            </div>
            <div className="mt-8">
              <img
                src={i3}
                alt=""
                loading="lazy"
                className="w-[315px] h-[179px] mx-5 rounded-lg"
              />
            </div>
            <button className="border border-zinc-400 text-green-700 text-[18px] font-semibold w-[305px] h-[48px] rounded-lg mx-6 mt-8 py-[10px] mb-6 hover:shadow-md transition-all 2s ease">
              Schedule a Treatment
            </button>
          </div>
        </div>
      </section>

      <section className="mt-32 mb-10">
        <div className="text-4xl font-semibold text-black ml-28 w-[765px]">
          Irresistible Offers Awaits You..
        </div>
        <Slider />
      </section>
      <section className="mt-10">
        <FaLongArrowAltRight className="ml-36" size={25} />
        <CardCarousel />
      </section>
      <section className="mt-24">
        <VerticalScroll />
      </section>
      <section className="w-[1280px] flex justify-center mx-auto mb-20 space-x-32 mt-52 font-inter">
        <div>
          <div className="w-[558px] h-[108px] -mt-40">
            <p className="text-[45px] font-bold ">Strength Physical Health</p>
            <p className="text-[45px] font-bold -mt-3">and Wellness</p>
          </div>
          <p className="w-[573px] h-[120px] text-[20px] font-normal  text-zinc-500 mt-10">
            Discover the pinnacle of physical health and wellness with our
            expertly crafted strength programs. Our tailored approach and
            certified professionals will guide you towards your fitness goals,
            ensuring long-lasting vitality and well-being. Elevate your
            strength, elevate your life.
          </p>

          <div className="flex mt-20">
            <img src={chechmark} alt="checkmark" className="w-6 h-6" />
            <p className="text-[23px] ml-3 -mt-1.5 font-medium">
              Guidance you can trust
            </p>
          </div>
          <div className="flex mt-2">
            <img src={chechmark} alt="checkmark" className="w-6 h-6" />
            <p className="text-[23px] ml-3 -mt-1.5 font-medium ">
              Skill for life success
            </p>
          </div>
          <div className="flex mt-2">
            <img src={chechmark} alt="checkmark" className="w-6 h-6" />
            <p className="text-[23px] ml-3 -mt-1.5 font-medium ">
              Strategies to stay fit
            </p>
          </div>
          <div className="flex mt-2">
            <img src={chechmark} alt="checkmark" className="w-6 h-6" />
            <p className="text-[23px] ml-3 -mt-1.5 font-medium ">
              Strategies to stay fit
            </p>
          </div>

          <Link to="/login">
            <button
              onClick={() => {
                setIsLoginClicked(true);
              }}
              className="text-white  border w-[227px] h-[54px] text-xl font-semibold bg-green-700 rounded-[10px] mt-20 shadow-lg"
            >
              Login For FREE
            </button>
          </Link>
        </div>
        <img
          src={HomeImage}
          alt="home"
          loading="lazy"
          className="w-[476px] h-[476px] rounded-2xl shadow-[rgb(239,245,255)_24px_-21px_1px_0px]"
        />
      </section>
      <section className="w-[1280px] flex justify-evenly mx-auto space-x-16 mb-20 mt-40 font-inter">
        <img
          src={HomeImage2}
          alt="home"
          loading="lazy"
          className="w-[476px] h-[476px] mt-10 rounded-2xl shadow-[rgb(239,255,255)_-24px_-21px_1px_0px]"
        />
        <div>
          <div className="w-[528px] text-[45px] -mt-20">
            <p className="font-bold">Reasons to choose</p>
            <p className="text-[45px] font-bold -mt-4">Physio Plus</p>
          </div>
          <p className="w-[538px] text-[20px] font-normal  text-zinc-500 mt-6">
            Choose PhysioPlus for personalized care and expert physiotherapists
            who prioritize your well-being, ensuring your path to recovery is
            smooth and effective
          </p>
          <div className="flex mt-10">
            <img
              src={HomeImage3}
              alt="home"
              loading="lazy"
              className="w-[46px] h-[226.035px] -ml-1.5"
            />
            <div className=" text-[23px] font-medium">
              <p className="">Value for money</p>
              <p className="mt-6">Qualified therapists</p>
              <p className="mt-7">Personalised treatment plan</p>
              <p className="mt-[27px]">Convenient</p>
            </div>
          </div>
          <Link to="#">
            <button className="text-green-500  border w-[221px] text-[23px] font-bold bg-white rounded-[10px] mt-11 shadow-lg px-2 py-1">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      <section>
        <div className="flex flex-col px-5 bg-zinc-50">
          <div className="self-center mt-20 mb-8 text-5xl font-bold text-black whitespace-nowrap max-md:max-w-full max-md:text-4xl max-md:mt-10">
            Popular news and blogs
          </div>
          <div className="text-zinc-500 text-center text-xl self-center max-w-[694px] mt-9 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut lLorem ipsum dolor sit{" "}
          </div>
          <div className="self-center w-full max-w-[1116px] mt-28 mb-[85px] max-md:max-w-full max-md:my-10">
            <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
                <div className="flex flex-col grow max-md:mt-10">
                  <img
                    loading="lazy"
                    src={blogimg}
                    alt="blog1"
                    className="self-start object-cover object-center w-full overflow-hidden aspect-square"
                  />
                  <div className="flex w-[346px] max-w-full items-start gap-5 ml-3 mt-3 max-md:ml-2.5">
                    <div className="text-zinc-500 text-center text-lg w-[262px] mt-1.5 hover:cursor-pointer">
                      Vidhan Solanki • 3days Ago
                    </div>
                    <div className="text-black text-center text-base bg-emerald-400 bg-opacity-50 w-[60px] max-w-full pl-3 pr-3.5 py-1 rounded self-start">
                      Tips{" "}
                    </div>
                  </div>
                  <div className="mt-6 text-xl font-medium text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </div>
                  <div className="mt-4 text-xl text-zinc-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col grow max-md:mt-10">
                  <img
                    loading="lazy"
                    src={blogimg}
                    alt="blog2"
                    className="self-start object-cover object-center w-full overflow-hidden aspect-square"
                  />
                  <div className="flex w-[346px] max-w-full items-start gap-5 ml-3 mt-3 self-start max-md:ml-2.5">
                    <div className="text-zinc-500 text-center text-lg w-[262px] mt-1.5 self-start hover:cursor-pointer">
                      Vidhan Solanki • 3days Ago
                    </div>
                    <div className="text-black text-center text-base bg-emerald-400 bg-opacity-50 w-[59px] max-w-full pl-3 pr-3.5 py-1 rounded self-start">
                      Tips{" "}
                    </div>
                  </div>
                  <div className="mt-6 text-xl font-medium text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </div>
                  <div className="mt-4 text-xl text-zinc-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col grow max-md:mt-10">
                  <img
                    loading="lazy"
                    src={blogimg}
                    alt="blog3"
                    className="self-start object-cover object-center w-full overflow-hidden aspect-square"
                  />
                  <div className="flex w-[346px] max-w-full items-start gap-5 ml-3 mt-3 self-start max-md:ml-2.5">
                    <div className="text-zinc-500 text-center text-lg w-[262px] mt-1.5 self-start hover:cursor-pointer">
                      Vidhan Solanki • 3days Ago
                    </div>
                    <div className="text-black text-center text-base bg-emerald-400 bg-opacity-50 w-[62px] max-w-full pl-3 pr-3.5 py-1 rounded self-start">
                      Tips{" "}
                    </div>
                  </div>
                  <div className="mt-6 text-xl font-medium text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </div>
                  <div className="mt-4 text-xl text-zinc-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-20 text-center">
              <button className="text-white bg-green-500 rounded-md w-[164px] h-[62.537px] hover:shadow-md">
                Read More...
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1280px] flex justify-around space-x-20 mx-auto mt-20">
        <div>
          <p className="w-[519px] h-[111px] text-[35px] font-semibold mt-20">
            Unleash Extraordinary Possibilities with Our App!
          </p>
          <p className="text-xl font-normal text-zinc-600">
            Start your 30-day free trail today.
          </p>
          <div className="flex mt-20">
            <div>
              <img
                src={HomeImage5}
                alt="home"
                loading="lazy"
                className="w-[154px] h[50px] cursor-pointer"
              />
            </div>
            <div className="mt-[0.2rem]">
              <img
                src={HomeImage6}
                alt="home"
                loading="lazy"
                className="w-[154px] h[50px] cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="relative -ml-10">
          <div>
            <img
              src={HomeImage4}
              alt="home"
              loading="lazy"
              className="w-[256px] h-[438px] absolute ml-12 -mt-7"
            />
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="330"
              height="334"
              viewBox="0 0 330 334"
              fill="none"
            >
              <path
                d="M116.563 315.784C47.6886 273.578 -24.4419 239.831 9.5751 184.32C43.5921 128.809 46.9416 123.343 158.661 22.2121C300.004 -78.7394 353.511 209.045 319.494 264.556C285.477 320.066 185.437 357.99 116.563 315.784Z"
                fill="#EAFBEA"
              />
            </svg>
          </div>
        </div>
      </section>
      <section className="mt-28">
        <div className="flex flex-col">
          <div className="bg-gray-50 self-center flex w-full max-w-[1400px] flex-col px-5 py-11 rounded-2xl max-md:max-w-full">
            <div className="self-center flex w-[617px] max-w-full flex-col">
              <div className="text-black text-center text-2xl font-semibold self-center ml-2.5 whitespace-nowrap max-md:max-w-full">
                Have Questions or Need Assistance?{" "}
              </div>
              <div className="self-stretch mt-5 text-xl text-center text-neutral-600 whitespace-nowrap max-md:max-w-full">
                Contact us now for a quick resolution. Our team is ready to
                assist.
              </div>
              <div className="self-center flex w-[572px] max-w-full items-start justify-between gap-5 ml-2.5 mt-11 max-md:flex-wrap max-md:mt-10">
                <form>
                  <input
                    className="text-zinc-500 text-base font-medium self-stretch w-[400px] max-w-full grow basis-auto pl-4 pr-5 py-4 rounded-md border-[0.5px] border-solid border-black"
                    type="text"
                  ></input>
                </form>
                <button className="bg-green-500 font-semibold text-zinc-100 mt-1 flex items-center justify-center w-[142px] max-w-full flex-col px-3 py-3 rounded-md hover:shadow-md">
                  Send
                </button>
              </div>
              <div className="text-black text-center text-xs font-light underline ml-24 mt-2.5 self-start whitespace-nowrap max-md:ml-2.5">
                <a href="/" className="hover:cursor-pointer">
                  We care about your data in our privacy policy.
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
