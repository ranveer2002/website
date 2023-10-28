import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterNav = () => {
  return (
    <div>
      <div className="flex flex-col self-stretch w-full px-5 bg-zinc-50 mt-9 pt-14 pb-9 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/31699ca0-8fcb-48a2-93af-f0046b498dc7?apiKey=7121ca0e54074717919f023f74afb943&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/31699ca0-8fcb-48a2-93af-f0046b498dc7?apiKey=7121ca0e54074717919f023f74afb943&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31699ca0-8fcb-48a2-93af-f0046b498dc7?apiKey=7121ca0e54074717919f023f74afb943&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/31699ca0-8fcb-48a2-93af-f0046b498dc7?apiKey=7121ca0e54074717919f023f74afb943&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/31699ca0-8fcb-48a2-93af-f0046b498dc7?apiKey=7121ca0e54074717919f023f74afb943&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31699ca0-8fcb-48a2-93af-f0046b498dc7?apiKey=7121ca0e54074717919f023f74afb943&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/31699ca0-8fcb-48a2-93af-f0046b498dc7?apiKey=7121ca0e54074717919f023f74afb943&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/31699ca0-8fcb-48a2-93af-f0046b498dc7?apiKey=7121ca0e54074717919f023f74afb943&"
          alt="logo"
          className="aspect-[3.02] object-cover object-center w-[127px] overflow-hidden self-center max-w-full"
        />
        <div className="self-center flex w-[525px] max-w-full items-start justify-between gap-5 mt-8 max-md:flex-wrap max-md:justify-center">
          <div className="self-start text-base text-center text-neutral-700">
            <Link to="/Overview">Overview</Link>
          </div>
          <div className="self-start text-base text-center text-neutral-700">
            <Link to="/products">Products</Link>
          </div>
          <div className="self-start text-base text-center text-neutral-700">
            <Link to="/pricing">Pricing</Link>
          </div>
          <div className="self-start text-base text-center text-neutral-700">
            <Link to="Carrers">Carrers</Link>
          </div>
          <div className="self-start text-base text-center text-neutral-700">
            <Link to="help">Help</Link>
          </div>
          <div className="self-start text-base text-center text-neutral-700">
            <Link to="privacy">Privacy</Link>
          </div>
          <div className="self-start text-base text-center text-neutral-700 whitespace-nowrap">
            <Link to="contact">Contact us</Link>
          </div>
        </div>
        <div className="bg-zinc-400 self-center w-[1231px] h-px mt-12 max-md:max-w-full max-md:mt-10" />
        <div className="self-center flex w-full max-w-[1236px] items-start justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
          <div className="flex flex-row space-x-5">
            <FaInstagram
              className="cursor-pointer"
              href="https://www.instagram.com/physioplus_pvt.ltd/"
            />
            <FaWhatsapp className="cursor-pointer" href="#" />
            <FaLinkedin
              className="cursor-pointer"
              href="https://www.linkedin.com/company/physioplus-healthcare-private-limited/"
            />
          </div>
          <div className="self-center my-auto text-base text-center cursor-pointer text-neutral-400 whitespace-nowrap max-md:max-w-full hover:underline">
            <a href="/">
              © 2023 . PhysioPlus Healthcare Pvt. Ltd. All rights reserved.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
