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
    <div className="w-100vw h-[650px] group-loginbg-color font-inter">
      <div className="w-[500px] h-full border bg-white">
        <div className="w-[450px] h-[600px] ml-10">
          <div className="flex items-center justify-center w-6 h-6 mt-5 -ml-6 text-green-700 rounded-full cursor-pointer hover:bg-green-700 hover:text-white">
            <div
              onClick={() => {
                setIsLoginClicked(false);
                navigate(-1);
              }}
            >
              <IoIosArrowBack size={18} />
            </div>
          </div>

          <div className="mt-16">
            <img
              src={Logo}
              alt="logo"
              loading="lazy"
              className="w-[174px] h-[65px] ml-[120px]"
            />
            <p className="text-xl font-bold text-green-700 mt-2 ml-[120px]">
              Hey, Welcome back
            </p>
          </div>
          <form onSubmit={submitHandler} className="ml-14">
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
            <button className="w-[320px] text-white text-lg font-medium border px-2 py-3 rounded-lg bg-green-600 outline-none mt-8">
              Login
            </button>
          </form>
          <div className="flex w-[320px] utems-center my-8 gap-x-2 ml-14">
            <div className="w-full h-[1px] bg-slate-400"></div>
            <p className="text-slate-500 font-medium leading-[1.375rem] mt-[-12px]">
              OR
            </p>
            <div className="w-full h-[1px] bg-slate-400"></div>
          </div>
          <div className="w-[320px] flex justify-center items-center rounded-lg font-medium text-green-800 text-lg border ml-14 px-[12px] py-[8px] gap-x-2 mt-6 bg-sky-100">
            <FcGoogle className="text-2xl" />
            <p>Login with Google</p>
          </div>
          <div className="flex items-center justify-center mt-5">
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
