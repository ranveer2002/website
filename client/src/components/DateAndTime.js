import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TimeSelect from "./TimeSelect";

const DateAndTime = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[70%] mx-auto border border-slate-300 mt-10">
      <div className="flex px-10 py-5 gap-3 items-center text-lg text-black font-bold">
        <FaArrowLeft onClick={() => navigate(-1)} className="cursor-pointer" />
        Select Date And Time
      </div>

      <div className="mx-auto">
         <TimeSelect/>
      </div>
    </div>
  );
};

export default DateAndTime;
