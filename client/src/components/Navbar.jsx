import logo from "../assets/physiologo.png";
import { Link } from "react-router-dom";
import RespNavbar from "./RespNav";

const Navbar = (props) => {
  let setIsLoginClicked = props.setIsLoginClicked;
  return (
    <>
      <div className="flex justify-around items-center w-[1280px] h-[90px] mx-auto">
        <div className="mt-7">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              loading="lazy"
              className="w-[174px] h-[58px] mt-3"
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
    </>
  );
};

export default Navbar;
