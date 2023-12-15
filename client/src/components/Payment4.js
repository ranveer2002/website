import React from "react";
import paymentFail from "../assets/paymentFail.png";

const Payment3 = () => {
  return (
    <div className="border-4 border-slate-300 mt-14 w-[70%] mx-auto rounded-xl">
      <img src={paymentFail} alt="payment" className="mx-auto w-[300px] mt-5" />
      <p className="font-bold text-3xl text-center mt-2">Payment Failed!</p>
      <p className="text-center mt-2">
        Your transaction has failed due to some technical error.
      </p>
      <p className="text-center mt-2">Please try again</p>
    <div className="text-center mb-10">
      <button className="w-[240px] border  border-emerald-500 bg-emerald-500 text-white font-semibold text-center  text-lg mt-7 py-1 rounded-md">
        Try Again
      </button>
    </div> 
    </div>
  );
};

export default Payment3;
