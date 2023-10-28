import HomeSlider from "../components/HomeSilder";
import i1 from "../assets/image1.jpeg";
import i2 from "../assets/image2.jpeg";
import i3 from "../assets/image3.jpeg";
import Slider from "../components/Slider";
import HomeImage from "../assets/HomeImage.png";
import HomeImage2 from "../assets/Home Image2.png";
import HomeImage3 from "../assets/homeImage3.png";
import blogimg from "../assets/blogimg.png";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = (props) => {
  let setIsLoginClicked = props.setIsLoginClicked;

  return (
    <div>
      <section className="grid grid-cols-5 gap-2 m-5 w-1172 h-642 font-helvetica">
        <div className="col-span-3 p-10  h-[600px] ">
          <button className="p-1 ml-4 text-white bg-green-500 rounded-md font-helvetica">
            No.1 Online Physiotheraphy Platform
          </button>
          <div className="font-bold text-black text-[58px] font-helvetica mt-3">
            <div className="ml-4">Free, Personalized</div>
            <div className="ml-4">Online Physiotherapy</div>
            <div className="ml-4">Health Care</div>
          </div>

          <div className="font-medium text-trueGray-500 text-[18px] mt-5">
            <div className="ml-4">
              Start improving phsyical health and well being today.
            </div>
            <div className="ml-4"> Let PhysioPlus shows you how. </div>
            <div className="ml-4">
              Building Power to Build A Physically Healthy World: Supporting
              Sportsman carrer growth.
            </div>
          </div>
          <div className="w-[672px] h-[64px] rounded-md border border-neutral-500 flex items-center flex-row justify-evenly mt-7">
            <form className="ml-4">
              <label for="city">City, State:</label>
              <select className="ml-2 text-black bg-white outline-none cursor-pointer">
                <option value="" className="text-center">
                  All
                </option>
                <option value="jaipur" className="p-2 text-center">
                  Jaipur, Rajasthan
                </option>
                <option value="Delhi" className="p-2 text-center">
                  Delhi, New Delhi
                </option>
              </select>
            </form>

            <form>
              <label for="category">Category:</label>
              <select className="ml-2 text-black bg-white outline-none cursor-pointer">
                <option value="" className="text-center">
                  All
                </option>
                <option value="chiropractor" className="text-center">
                  Chiropractor
                </option>
                <option value="paincare" className="text-center">
                  Pain Care
                </option>
                <option value="orthophysio" className="text-center">
                  Ortho Physio
                </option>
                <option value="sportsphysio" className="text-center">
                  Sports Physio
                </option>
                <option value="pediatriccare" className="text-center">
                  Pediatric Care
                </option>
                <option value="neurophysio" className="text-center">
                  Neuro Physio
                </option>
              </select>
            </form>
            <button className="w-[94px] h-[42px] p-1 font-bold text-white bg-green-500 rounded-md">
              Search
            </button>
          </div>
          <div className="flex flex-row m-4 space-x-16">
            <span>Personalized Home Care</span>
            <span>Free to connect</span>
            <span>Fast Telecommuniaction</span>
          </div>
        </div>

        <div className="col-span-2 p-1 h-[600px] ">
          <HomeSlider />
        </div>
      </section>
      <section className="flex items-center mx-auto justify-evenly font-helvetica">
        <div className="border w-[361px] h-[440px] rounded-2xl bg-emerald-100 space-y-5 shadow-md">
          <p className="items-center mt-6 text-3xl font-bold mx-11">
            Clinical Treatment{" "}
            <span className="ml-6 text-3xl font-bold">Physiotherapy</span>
          </p>
          <p className="text-slate-500 text-[16px] font-normal mx-auto w-[315px]">
            High quality physiotherapy care at our PhysioPlus Centre near you.
            Best Treatment for Ortho/Neuro and many more Issues
          </p>
          <img src={i1} alt="" loading="lazy" className="mx-auto rounded-2xl" />
          <button className="border bg-neutral-700 text-white text-xl font-semibold px-7 w-[315px] h-[54px] rounded-2xl ml-6 mt-2">
            Schedule a Treatment
          </button>
        </div>
        <div className="border w-[361px] h-[440px] rounded-2xl bg-emerald-100 space-y-5 shadow-md">
          <p className="items-center mt-6 ml-12 text-3xl font-bold">
            Physio Home Visits{" "}
            <span className="-ml-1 text-3xl font-bold">
              Physio's Availability
            </span>
          </p>
          <p className="text-slate-500 text-[15px] font-normal w-[315px] ml-10">
            Home Visits by certified By PhysioPlus Physiotherapists for Patients
            with mobility issues for patients looking for convenience
          </p>
          <img src={i2} alt="" loading="lazy" className="mx-auto rounded-2xl" />
          <button className="border bg-neutral-700 text-white text-xl font-semibold px-7 w-[315px] h-[54px] rounded-2xl ml-6 mt-2">
            Schedule a Home Visit
          </button>
        </div>
        <div className="border w-[361px] h-[440px] rounded-2xl bg-emerald-100 space-y-5 shadow-md">
          <p className="items-center mt-6 ml-20 mr-3 text-3xl font-bold">
            Expert Online{" "}
            <span className="-ml-1 text-3xl font-bold">Physiotherapy</span>
          </p>
          <p className="text-slate-500 text-[16px] font-normal mx-auto w-[315px]">
            Certified PhysioPlus therapists offer online sessions for patients
            with mobility challenges and those seeking convenience.
          </p>
          <img src={i3} alt="" loading="lazy" className="mx-auto rounded-2xl" />
          <button className="border bg-neutral-700 text-white text-xl font-semibold px-7 w-[315px] h-[54px] rounded-2xl ml-6 mt-2">
            Schedule a Consultation
          </button>
        </div>
      </section>
      <section className="m-5">
        <Slider />
      </section>
      <section></section>
      <section className="flex justify-center mx-auto mb-20 space-x-32 mt-60">
        <div>
          <p className="w-[528px] text-[45px] font-bold font-helvetica -mt-40">
            Strength Physical Health
          </p>
          <span className="text-[45px] font-bold font-helvetica">
            and Wellness
          </span>
          <p className="w-[538px] text-[20px] font-normal font-helvetica text-zinc-500 mt-6">
            Discover the pinnacle of physical health and wellness with our
            expertly crafted strength programs. Our tailored approach and
            certified professionals will guide you towards your fitness goals,
            ensuring long-lasting vitality and well-being. Elevate your
            strength, elevate your life.
          </p>

          <div className="relative flex mt-10 ml-10">
            <div className="w-6 h-6 rounded-[50%] bg-green-800"></div>
            <AiOutlineCheck className="absolute text-white text-[18px] font-semibold mt-1 ml-1" />
            <p className="text-[23px] ml-4 -mt-1 font-medium font-helvetica">
              Guidance you can trust
            </p>
          </div>
          <div className="relative flex mt-2 ml-10">
            <div className="w-6 h-6 rounded-[50%] bg-green-800"></div>
            <AiOutlineCheck className="absolute text-white text-[18px] font-semibold mt-1 ml-1" />
            <p className="text-[23px] ml-4 -mt-1 font-medium font-helvetica">
              Skill for life success
            </p>
          </div>
          <div className="relative flex mt-2 ml-10">
            <div className="w-6 h-6 rounded-[50%] bg-green-800"></div>
            <AiOutlineCheck className="absolute text-white text-[18px] font-semibold mt-1 ml-1" />
            <p className="text-[23px] ml-4 -mt-1 font-medium font-helvetica">
              Strategies to stay fit
            </p>
          </div>
          <div className="relative flex mt-2 ml-10">
            <div className="w-6 h-6 rounded-[50%] bg-green-800"></div>
            <AiOutlineCheck className="absolute text-white text-[18px] font-semibold mt-1 ml-1" />
            <p className="text-[23px] ml-4 -mt-1 font-medium font-helvetica">
              Strategies to stay fit
            </p>
          </div>

          <Link to="/login">
            <button
              onClick={() => {
                setIsLoginClicked(true);
              }}
              className="text-white font-helvetica border w-[227px] h-[54px] text-xl font-semibold bg-green-700 rounded-[10px] mt-16 ml-10 shadow-md"
            >
              Login For FREE
            </button>
          </Link>
        </div>
        <img
          src={HomeImage}
          alt="home"
          loading="lazy"
          className="w-[476px]h-[476px] rounded-2xl shadow-[rgb(239,245,255)_45px_-35px_2px_10px]"
        />
      </section>
      <section className="flex justify-center mx-auto mb-20 space-x-32 mt-60">
        <img
          src={HomeImage2}
          alt="home"
          loading="lazy"
          className="w-[476px]h-[476px] rounded-2xl shadow-[rgb(239,255,255)_-42px_-29px_2px_10px]"
        />
        <div>
          <p className="w-[528px] text-[45px] font-bold font-helvetica -mt-40">
            Reasons to choose
          </p>
          <span className="text-[45px] font-bold font-helvetica">
            Physio Plus
          </span>
          <p className="w-[538px] text-[20px] font-normal font-helvetica text-zinc-500 mt-6">
            Choose PhysioPlus for personalized care and expert physiotherapists
            who prioritize your well-being, ensuring your path to recovery is
            smooth and effective
          </p>
          <div className="flex mt-10 ml-8">
            <img
              src={HomeImage3}
              alt="home"
              loading="lazy"
              className="w-[46px] h-[226.035px]"
            />
            <div className="font-helvetica text-[23px] font-semibold space-y-7 ml-1">
              <p>Value for money</p>
              <p>Qualified therapists</p>
              <p>Personalised treatment plan</p>
              <p>Convenient</p>
            </div>
          </div>
          <Link to="#">
            <button className="text-green-500 font-helvetica border w-[221px] text-[23px] font-bold bg-white rounded-[10px] mt-16 ml-10 shadow-lg px-2 py-1 hover:scale-105 transition-all 3s ease">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      <section>
        <div className="flex flex-col px-5 bg-zinc-50">
          <div className="self-center mt-20 text-5xl font-bold text-black whitespace-nowrap max-md:max-w-full max-md:text-4xl max-md:mt-10">
            Popular news and blogs
          </div>
          <div className="text-zinc-500 text-center text-xl self-center max-w-[694px] mt-9 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut lLorem ipsum dolor sit{" "}
          </div>
          <div className="self-center w-full max-w-[1116px] mt-28 mb-44 max-md:max-w-full max-md:my-10">
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
                    <div className="text-zinc-500 text-center text-lg w-[262px] mt-1.5">
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
                    <div className="text-zinc-500 text-center text-lg w-[262px] mt-1.5 self-start">
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
                    <div className="text-zinc-500 text-center text-lg w-[262px] mt-1.5 self-start">
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

      <section>
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
                <form className="text-zinc-500 text-base font-medium self-stretch w-[300px] max-w-full grow basis-auto pl-4 pr-5 py-4 rounded-md border-[0.5px] border-solid border-black">
                  Enter your email
                </form>
                <button className="bg-green-500 font-semibold text-zinc-100 mt-1 flex items-center justify-center w-[142px] max-w-full flex-col px-3 py-3 rounded-md hover:shadow-md">
                  Send
                </button>
              </div>
              <div className="text-black text-center text-xs font-light underline ml-24 mt-2.5 self-start whitespace-nowrap max-md:ml-2.5">
                We care about your data in our privacy policy.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
