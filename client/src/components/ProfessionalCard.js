import React from "react";
import doctor from "../assets/doctor.png";
import doctick from "../assets/doctick.png";
import availtoday from "../assets/availtoday.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfessionalCard = ({
  name,
  title,
  location,
  rating,
  reviews,
  docimg,
}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white border rounded-xl border-slate-700 h-[258px] w-[770px]">
      <div className="flex mx-auto mt-4 justify-evenly">
        <div className="flex mb-4 space-x-8">
          <img
            src={doctor}
            alt="Profile"
            className="w-[160px] h-[180px] rounded-lg"
          />
          <div className="flex-grow">
            <div className="flex mt-2 space-x-2 ">
              <h5 className="text-[26px] font-bold">{name}</h5>
              <img
                src={doctick}
                alt="Profile"
                className="w-[16px] h-[16px] mt-2"
              />
            </div>
            <div>
              <img
                src={availtoday}
                alt="Profile"
                className="w-[126px] h-[20px] mt-2"
              />
            </div>
            <p className="text-[23px] text-gray-500">{location}</p>
            <p className="text-[20px] text-gray-500">BPT,MPT</p>
            <div className="flex items-center">
              <div className="flex items-center space-x-1 text-yellow-300 ">
                {/* Star icons */}
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <span className="text-sm font-semibold text-black border-r-[3px] border-gray-300 px-2">
                  {rating}
                </span>
              </div>
              <span className="px-2 text-sm text-gray-500">
                {reviews} Reviews
              </span>
            </div>
          </div>
          <div className="w-0.5 bg-gray-200 h-36"></div>
          <div>
            <div className="items-center mt-4 ml-1 text-left">
              <p className="text-xl text-green-500">Specialisation</p>
              <p className="text-lg text-slate-500">{title}</p>
              <p className="text-lg text-slate-500">Ortho pain</p>
              <p className="text-lg text-slate-500">Chriopactor</p>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full py-1 text-xl font-semibold text-green-600 rounded-b-xl bg-emerald-200 ">
        Book Appointment
      </button>
    </div>
  );
};

export default ProfessionalCard;
