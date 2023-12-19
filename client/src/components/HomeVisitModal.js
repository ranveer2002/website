import { useRef, React } from "react";
import { RxCross2 } from "react-icons/rx";

const HomeVisitModal = ({ onClose }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col gap-2 justify-center items-center"
    >
        <button>
        <RxCross2 size={22} className="place-self-end flex justify-end" onClick={onClose}/>
        </button>

        <div className="bg-white rounded-lg w-72 h-88 px-5 py-3">
        <form>
          <label for="name" className="text-base font-semibold">
            Name
          </label>
          <input
            id="name"
            required
            type="text"
            placeholder="Enter your Name"
            className="px-3 py-1 border border-slate-400 mt-2 outline-none"
          />

          <label for="age" className="text-base font-semibold mt-2">
            Age
          </label>
          <input
            id="age"
            required
            type="number"
            placeholder="Enter your Age"
            className="px-3 py-1 border border-slate-400 mt-2 outline-none"
          />
          <label for="address" className="text-base font-semibold mt-2">
            Address
          </label>
          <input
            id="address"
            required
            type="text"
            placeholder="Enter your Address"
            className="px-3 py-1 border border-slate-400 mt-2 outline-none"
          />

          <label for="area" className="text-base font-semibold mt-2">
            Landmark/Area
          </label>
          <input
            id="area"
            required
            type="text"
            placeholder="Enter your Area"
            className="px-3 py-1 border border-slate-400 mt-2 outline-none"
          />
          <button className="border px-4 py-1 bg-green-500 font-semibold text-white rounded-lg mt-2">
            Submit
          </button>
        </form>
        </div>  
    </div>
  );
};

export default HomeVisitModal;
