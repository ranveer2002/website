import doctor from "../assets/doctor.png";
import check from "../assets/doctick.png";
// import docicon from "../assets/docicon.png";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import DoctorAbout from "../components/DoctorAbout";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";

const DoctorProfile = () => {
  return (
    <div className="flex justify-around mt-9">
      <div>
        <div className="flex space-x-5 justify-center items-center ">
          <img
            src={doctor}
            alt="doctor"
            loading="lazy"
            className="w-[229px] h-[255px] rounded-lg"
          />
          <div>
            <div className="flex space-x-2">
              <p className="text-2xl font-extrabold">Dr. Artika Singh</p>
              <img
                src={check}
                alt="check"
                loading="lazy"
                className="w-5 h-5 mt-1.5"
              />
            </div>
            <p className="text-sm font-semibold text-green-600">
              Professional Chiropractor
            </p>
            <div className="flex space-x-1">
              {/* <img
                src={docicon}
                alt="docicon"
                loading="lazy"
                className="w-6 h-[85px] mt-1.5"
              /> */}
              <div className="text-sm space-y-2 mt-2.5">
                <p>Save money on appointment with physioplus premium.</p>
                <p>In Practice for 10 Years</p>
                <p>BPT, MPT</p>
              </div>
            </div>
            <div className="flex space-x-3 mt-2">
              <button
                style={{ background: "rgba(57, 201, 133, 0.15)" }}
                className="px-4 py-1 rounded-md text-green-600 text-sm font-semibold"
              >
                Make Appointment
              </button>
              <button className="bg-zinc-200 px-4 py-1 rounded-md text-sm font-semibold text-slate-700">
                Online Consultancy Available
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <DoctorAbout />
        </div>
        <div className="mt-10">
          <p className="text-xl font-bold">Location</p>
          <div className="flex space-x-14 mt-3">
            <div>
              <p className="text-xl font-semibold">Nearby Area</p>
              <p className="text-base font-medium text-neutral-500 mt-2">
                Mansarowar
              </p>
              <p className="text-base font-medium text-neutral-500 mt-2">
                Gurjar ki Thadi
              </p>
              <p className="text-base font-medium text-neutral-500 mt-2">
                Gopalpura
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold">Primary Location</p>
              <div className="flex space-x-3 mt-2">
                <HiOutlineLocationMarker
                  fontSize={24}
                  className="text-neutral-500 font-bold"
                />
                <p className="w-72 text-base font-medium text-neutral-500">
                  Physio Clinic center, A-12, Shyam Nagar,Gurjar ki thadi,
                  jaipur,302006
                </p>
              </div>
              <div className="flex space-x-3 mt-2">
                <BiPhoneCall
                  fontSize={24}
                  className="text-neutral-500 font-bold"
                />
                <p className="w-72 text-base font-medium text-neutral-500">
                  +91 8000729929
                </p>
              </div>
              <div className="flex space-x-3 mt-2">
                <FiMail fontSize={24} className="text-neutral-500 font-bold" />
                <p className="w-72 text-base font-medium text-neutral-500">
                  support@physioplushealthcare.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-1">
        <div className="border border-slate-400 px-5 py-3 rounded-lg w-[261px] h-[179px]">
          <p className="text-lg font-extrabold">Let's Connect</p>
          <div className="flex space-x-2 ml-3 mt-2">
            <FiPhoneCall color="gray" fontSize={20} className="mt-1" />
            <p className="text-neutral-500 text-base">+91 1234567890</p>
          </div>
          <div className="flex space-x-2 ml-3 mt-2">
            <CiMail fontSize={20} className="mt-1" />
            <p className="text-neutral-500 text-base">example@gmail.com</p>
          </div>
          <button className="bg-green-700 px-5 py-1 text-white text-sm font-medium rounded-md mt-4">
            Book an Appointment
          </button>
        </div>
        <div className="border border-slate-400 mt-8 rounded-lg px-6 py-3 w-[261px] h-[296px]">
          <p className="text-lg font-bold">Top Specialities</p>
          <p className="text-neutral-500 text-base font-medium">Back Pain</p>
          <p className="text-neutral-500 text-base font-medium">Chiropactor</p>
          <p className="text-neutral-500 text-base font-medium">Chriopractor</p>

          <p className="text-lg font-bold mt-5">Expertise</p>
          <p className="text-neutral-500 text-base font-medium">Back Pain</p>
          <p className="text-neutral-500 text-base font-medium">Chiropactor</p>
          <p className="text-neutral-500 text-base font-medium">Chriopractor</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
