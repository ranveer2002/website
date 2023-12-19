import privacy from "../assets/privacy.png";
import { useNavigate } from "react-router-dom";
const Payment1 = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[70%] border border-slate-400 rounded-xl mx-auto mt-20 flex justify-around items-center">
      <form className="px-10 my-10">
        <p className="text-2xl font-semibold px-4 py-4">Consult With Doctor</p>
        <div className="px-4">
          <label for="speciality" className="text-base font-medium">
            Speciality
          </label>
          <input
            id="speciality"
            type="text"
            required
            className="w-[300px] py-1 border border-slate-600 block mt-2 outline-none px-2 "
          ></input>
        </div>
        <div className="px-4 mt-4">
          <label for="speciality" className="text-base font-medium">
            Patient Name
          </label>
          <input
            id="speciality"
            type="text"
            required
            placeholder="Enter Your Name"
            className="w-[300px] py-1 border border-slate-600 block mt-2 outline-none px-2 "
          ></input>
        </div>
        <div className="px-4 mt-4">
          <label for="speciality" className="text-base font-medium">
            Mobile Number
          </label>
          <div className="flex gap-1">
            <div className="w-12 h-9 border border-slate-600 mt-2 font-semibold text-center py-1">+91</div>
            <input
              id="speciality"
              type="tel"
              required
              placeholder="Enter Mobile Number"
              className="w-[248px] py-1 border border-slate-600 block mt-2 outline-none px-2 "
            ></input>
          </div>
        </div>
        <button
          className="w-[300px] border  border-emerald-500 bg-emerald-500 text-white font-semibold text-center  text-lg mt-10 py-1 ml-4 rounded-md"
          onClick={() => navigate("/payment2")}
        >
          Continue
        </button>
      </form>
      <div className="w-0.5 h-44 bg-slate-200 my-10"></div>
      <div>
        <img src={privacy} alt="privacy" />
        <p className="text-base font-medium text-center">Private & secure</p>
      </div>
    </div>
  );
};

export default Payment1;
