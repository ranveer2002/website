import ImageCarousel from "../components/ImageCarousel";
import TestimonialCarousel from "../components/Testimonial";
import VerticalStepper from "../components/VerticalStepper";

const FitToplay = () => {
  return (
    <div className="w-full mx-auto font-inter">
      <section className="mt-28 flex flex-col justify-center items-center px-4 md:px-4 lg:px-8 sm:mx-auto">
        <p className="text-4xl md:text-xl lg:text-2xl font-semibold text-black text-center sm:mx-auto">
          An Assessment for Budding Athletes
        </p>
        <p className="text-lg md:text-lg lg:text-xl font-normal text-neutral-700 mt-6 text-center mx-4">
          Are you an aspiring athlete looking to maximize your potential? The
          "Fit To Play" program is here to help
        </p>
        <p className="text-lg md:text-lg lg:text-xl font-normal text-neutral-700 text-center mx-4">
          you achieve your goals and overcome the hurdles on your path to
          excellence.
        </p>
        <button className="text-white border w-40 h-12 md:w-52 md:h-16 text-lg font-bold bg-green-500 rounded-md mt-9 shadow-lg px-2 ">
          Get Started
        </button>
      </section>
      <section className="mt-20 sm:mx-auto">
        <ImageCarousel />
      </section>
      <section className="mt-20 sm:mx-auto">
        <VerticalStepper />
      </section>
      <section className="sm:mx-auto px-4 py-14 md:px-6 lg:w-[1200px] groupfittoplaybg">
        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-semibold mx-auto">
            What we offer
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly items-center mt-10 sm:mx-auto">
          <div className="">
            <div className="relative">
              <div className="absolute mt-[6px] ml-[6px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M16.0999 9.66011C16.0999 13.2168 13.2166 16.1001 9.65986 16.1001M16.0999 9.66011C16.0999 6.10339 13.2166 3.22011 9.65986 3.22011M16.0999 9.66011H17.7099M9.65986 16.1001C6.10315 16.1001 3.21986 13.2168 3.21986 9.66011M9.65986 16.1001V17.7101M3.21986 9.66011C3.21986 6.10339 6.10315 3.22011 9.65986 3.22011M3.21986 9.66011H1.60986M9.65986 3.22011V1.61011M12.0749 9.66011C12.0749 10.9939 10.9936 12.0751 9.65986 12.0751C8.3261 12.0751 7.24486 10.9939 7.24486 9.66011C7.24486 8.32634 8.3261 7.24511 9.65986 7.24511C10.9936 7.24511 12.0749 8.32634 12.0749 9.66011Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="32"
                  height="32"
                  rx="9.5"
                  stroke="#B8B8B8"
                />
              </svg>
            </div>
            <p className="text-[19px] font-semibold mt-3">Scientific Methods</p>
            <p className="w-[288px] text-[14px] font-normal">
              We employ the latest scientific approaches to help you achieve
              superior results.
            </p>
          </div>
          <div className="">
            <div className="relative">
              <div className="absolute mt-[6px] ml-[6px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M7.24504 8.85504L8.85504 10.465L12.4775 6.84254M7.96954 15.456L9.14484 17.0231C9.31962 17.2561 9.40701 17.3727 9.51414 17.4143C9.60798 17.4508 9.71209 17.4508 9.80593 17.4143C9.91307 17.3727 10.0005 17.2561 10.1752 17.0231L11.3505 15.456C11.5865 15.1414 11.7045 14.9841 11.8484 14.864C12.0403 14.7038 12.2669 14.5905 12.5101 14.5331C12.6926 14.49 12.8892 14.49 13.2825 14.49C14.4078 14.49 14.9704 14.49 15.4142 14.3062C16.006 14.0611 16.4761 13.591 16.7212 12.9992C16.905 12.5554 16.905 11.9928 16.905 10.8675V6.27904C16.905 4.92651 16.905 4.25025 16.6418 3.73365C16.4103 3.27924 16.0408 2.90979 15.5864 2.67826C15.0698 2.41504 14.3936 2.41504 13.041 2.41504H6.27904C4.92651 2.41504 4.25025 2.41504 3.73365 2.67826C3.27924 2.90979 2.90979 3.27924 2.67826 3.73365C2.41504 4.25025 2.41504 4.92651 2.41504 6.27904V10.8675C2.41504 11.9928 2.41504 12.5554 2.59887 12.9992C2.84398 13.591 3.31412 14.0611 3.90586 14.3062C4.34967 14.49 4.91229 14.49 6.03754 14.49C6.43084 14.49 6.6275 14.49 6.80994 14.5331C7.0532 14.5905 7.27975 14.7038 7.47164 14.864C7.61556 14.9841 7.73356 15.1414 7.96954 15.456Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="32"
                  height="32"
                  rx="9.5"
                  stroke="#B8B8B8"
                />
              </svg>
            </div>
            <p className="text-[19px] font-semibold mt-3">
              Doctor-Patient Communication
            </p>
            <p className="w-[288px] text-[14px] font-normal">
              We ensure open and clear communication to address your concerns
              and goals.
            </p>
          </div>
          <div className="">
            <div className="relative">
              <div className="absolute mt-[6px] ml-[6px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M16.905 16.905L14.0876 14.0875M16.1 9.25754C16.1 13.0365 13.0365 16.1 9.25754 16.1C5.47853 16.1 2.41504 13.0365 2.41504 9.25754C2.41504 5.47853 5.47853 2.41504 9.25754 2.41504C13.0365 2.41504 16.1 5.47853 16.1 9.25754Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="32"
                  height="32"
                  rx="9.5"
                  stroke="#B8B8B8"
                />
              </svg>
            </div>
            <p className="text-[19px] font-semibold mt-3">Health Analysis</p>
            <p className="w-[288px] text-[14px] font-normal">
              Comprehensive health assessment for tailored issue identification
              and planning.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-20 px-4 md:px-8 sm:mx-auto">
        <div className="max-w-md md:max-w-xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-semibold">Testimonials</p>
        </div>
        <div className="sm:mx-auto">
          <TestimonialCarousel />
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-evenly items-center h-[212px] mx-auto mt-24 bg-zinc-50 px-4 md:px-8 sm:mx-auto">
        <div>
          <p className="text-lg md:text-xl font-medium text-center md:text-left">
            Register Now and Begin Your Assessment Today!
          </p>
          <p className="text-neutral-600 text-base md:text-lg font-normal mt-2 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur,
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="w-30 h-10 px-5 py-1 border border-black text-sm font-medium rounded-md mr-2">
            Learn More
          </button>
          <button className="w-30 h-10 px-5 py-1 text-white font-semibold bg-green-500 rounded-md shadow-lg">
            Get Started
          </button>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-evenly items-center h-[170px] mt-20 -mb-20 bg-zinc-50 px-4 md:px-8 sm:mx-auto">
        <div>
          <p className="text-lg md:text-xl font-medium text-center md:text-left">
            Have Questions or Need Assistance?
          </p>
          <p className="text-neutral-600 text-base md:text-lg font-medium mt-2">
            Reach Out to Our Expert Team!
          </p>
        </div>
        <div className="mt-4 md:mt-0 sm:text-center">
          <input
            required
            name="email"
            placeholder="Enter your Email"
            className="w-52 h-10 border border-slate-500 outline-none bg-transparent text-sm font-medium pl-2 rounded-md"
          />
          <button className="w-22 h-10 px-5 py-1 text-white font-semibold bg-green-500 rounded-md shadow-lg ml-2 mt-2 md:mt-0">
            Send
          </button>
        </div>
      </section>
    </div>
  );
};
export default FitToplay;
