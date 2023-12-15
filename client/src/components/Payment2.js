import cash3X from "../assets/cash3X.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { HiOutlineLightBulb } from "react-icons/hi";

const Payment2 = () => {
    const navigate = useNavigate();
    return(
        <div className="max-w-[70%] border border-slate-400 rounded-xl mx-auto mt-20 flex justify-evenly items-center">
           <div className="px-5 my-10">
                <div className="flex gap-2">
                    <IoIosArrowRoundBack size={32} onClick={()=>navigate(-1)}/> 
                    <p className="text-2xl font-semibold">Confirm & Pay</p>
                </div>
                <p className="text-lg font-medium mt-4">Verified Physiotherapy online now</p>
                <div className="flex gap-2 mt-4">
                    <HiOutlineLightBulb size={32} color="green"/>
                    <p className="font-semibold mt-1">93% of user found online consultation helpful</p>
                </div>
                <div className="mt-4">
                    <input type="text" className="max-w-[350xp] py-1 border border-slate-600 block mt-2 outline-none px-2 "></input>
                </div>
                <div className="text-green-500 font-medium text-base mt-2">
                    Have a coupon code?
                </div>
                <div className="mt-4">
                    Final Fee
                    <p className="block font-bold text-emerald-500">₹120</p>
                </div>
                <button className="w-[240px] border  border-emerald-500 bg-emerald-500 text-white font-semibold text-center  text-lg mt-7 py-1 rounded-md"
                onClick={()=>navigate("/payment3")}>
                    Continue to Pay
                </button>
           </div>
           <div className="w-0.5 h-44 bg-slate-200 my-10"></div>
           <div className="max-w-[300px]">
                <img src={cash3X} alt="cash3X"/>
                <p className="text-base text-center font-semibold">3x more affordable!</p>
                <p className="text-base font-medium text-center">Get affordable healthcare online with, fee upto 3 times lesser then in clinic fees.</p>
           </div>
        </div>
    )
}

export default Payment2;