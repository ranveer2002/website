import logo from "../assets/physiologo.png";
import { Link } from "react-router-dom";
import RespNavbar from "./RespNav";
import RespNavbar2 from "./RespNav2";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = (props) => {
  let setIsLoginClicked = props.setIsLoginClicked;
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav((prev) => !prev);
  };
  return (
    <div>
      <div className="flex justify-around items-center max-w-[1280px] h-[90px] mx-auto sm:px-4">
        <div className="flex mt-7 gap-2">
          <div onClick={handleNav} className="cursor-pointer sm:hidden pt-0.5">
            {!nav ? <AiOutlineMenu size={24} /> : <AiOutlineClose size={24} />}
          </div>
          <div className="">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                loading="lazy"
                className="w-[124px]"
              />
            </Link>
          </div>
        </div>
        <div className="hidden sm:visible mt-7">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              loading="lazy"
              className="w-[174px] mt-3"
            />
          </Link>
        </div>
        <RespNavbar />
        <div className="mt-5">
          <Link to="/login">
            <button
              onClick={() => {
                setIsLoginClicked(true);
              }}
              className="text-white font-helvetica border w-[106px] h-[45px] text-lg bg-green-500 rounded-[10px]"
            >
              Log In
            </button>
          </Link>
        </div>
      </div>
      <div onClick={handleNav}>
        {nav && <RespNavbar2/>}
      </div>
    </div>
  );
};

export default Navbar;
