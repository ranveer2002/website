import React from "react";
import payment from "../assets/payment.png";
import { useNavigate } from "react-router-dom";

const Payment3 = () => {
  const navigate =  useNavigate();  
  return (
    <div className="border-4 border-slate-300 mt-14 w-[70%] mx-auto rounded-xl">
      <img src={payment} alt="payment" className="mx-auto w-[300px] mt-5" />
      <p className="font-bold text-3xl text-center">₹120.00</p>
      <p className="font-bold text-3xl text-center mt-2">Payment Successful!</p>
      <p className="text-center mt-2">
        The payment has been done successfully.
      </p>
      <p className="text-center mt-2">Thanks for being there with us.</p>
    <div className="text-center mb-10">
      <button className="w-[240px] border  border-emerald-500 bg-emerald-500 text-white font-semibold text-center  text-lg mt-7 py-1 rounded-md"
      onClick={()=>navigate('/payment4')}>
        Done
      </button>
    </div> 
    </div>
  );
};

export default Payment3;
