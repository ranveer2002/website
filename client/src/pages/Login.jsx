import { useState } from "react";
import Logo from "../assets/physiologo.png";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Login = (props) => {
  let setIsLoginClicked = props.setIsLoginClicked;
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const submitHandler = () => {
    setIsLoginClicked(false);
    navigate("/");
  };
  return (
    <div className="w-full h-full group-loginbg-color font-inter">
      <div className="w-[500px] bg-white">
        <div className="pt-4 pb-7">
          <div
            onClick={() => {
              setIsLoginClicked(false);
              navigate(-1);
            }}
            className="w-8 h-8 ml-10 px-1 py-1 text-white rounded-full cursor-pointer bg-green-500 hover:bg-green-700 duration-300"
          >
            <IoIosArrowBack size={24}/>
          </div>
          <div className="mt-10">
            <img
              src={Logo}
              alt="logo"
              loading="lazy"
              className="w-[174px] h-[65px] mx-auto"
            />
            <p className="text-xl font-bold text-green-700 mt-3 text-center">
              Hey, Welcome back
            </p>
          </div>
          <form onSubmit={submitHandler} className="text-center">
            <input
              required
              name="email"
              value={user.email}
              onChange={changeHandler}
              placeholder="Email"
              className="w-[320px] text-lg border mx-auto px-2 py-3 rounded-lg bg-sky-100 outline-none mt-8"
            />
            <input
              required
              name="password"
              value={user.password}
              onChange={changeHandler}
              placeholder="Password"
              maxLength="20"
              minLength="8"
              className="w-[320px] text-lg border px-2 py-3 rounded-lg bg-sky-100 outline-none mt-8"
            />
            <button className="w-[320px] text-white text-lg font-medium border px-2 py-3 rounded-lg bg-green-500 outline-none mt-8 hover:bg-green-700 duration-300">
              Login
            </button>
          </form>
          <div className="w-[320px] mx-auto flex justify-center items-center mt-8 gap-x-1">
            <div className="w-full h-[1px] bg-slate-400"></div>
            <p className="text-slate-500 font-medium leading-[1.375rem]">OR</p>
            <div className="w-full h-[1px] bg-slate-400"></div>
          </div>
          <div className="w-[320px] flex justify-center items-center rounded-lg font-medium text-green-800 text-lg border mx-auto px-[12px] py-[8px] gap-x-2 mt-5 bg-sky-100">
            <FcGoogle className="text-2xl" />
            <p>Login with Google</p>
          </div>
          <div className="flex items-center justify-center mt-9">
            <p className="text-slate-500">Don't have an Account?&nbsp;</p>
            <a href="/" className="text-green-700">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
