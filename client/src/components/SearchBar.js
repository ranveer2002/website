import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const Locations = [
    {
      name: "Jaipur",
      areas: [
        "Vaisali Nagar",
        "Ajmer Road",
        "Patrkar Colony",
        "Malviya Nagar",
        "Jhotwara",
        "Panchywala",
        "Khatipura",
        "Durgapura",
        "Sodala",
        "Mansarovar",
        "Vidhadhar Nagar",
        "Adarsh Nagar",
        "C-scheme",
        "Bhrampuri",
        "Raja Park",
        "Shyam Nagar",
        "Ridhi Sidhi",
        "Shanti Nagar",
        "Jagatpura",
        "Bani Park",
        "Govindpura",
        "Mahesh Nagar",
        "Pratap Nagar",
        "Lal Kothi",
        "Sanganer",
      ],
    },
    {
      name: "Delhi",
      areas: ["area1", "area1", "area1", "area1"],
    },
  ];

  const [location, setLocation] = useState("Location");
  const [area, setArea] = useState("Area");
  const [Areas, setAreas] = useState([]);
  const changeLocation = (event) => {
    setLocation(event.target.value);
    setAreas(Locations.find((city) => city.name === event.target.value).areas);
  };
  const changeArea = (event) => {
    setArea(event.target.value);
  };
  // const [visibleOptions, setVisibleOptions] = useState(5);

  // const handleScroll = (event) => {
  //   // Increase the number of visible options when scrolled
  //   setVisibleOptions((prevVisibleOptions) => prevVisibleOptions + 1);
  // };

  // // Attach the scroll event listener
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="w-[812px] h-[54px] rounded-xl border border-neutral-500 flex items-center justify-around mt-14 mx-auto">
      <div className="relative flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          className="absolute ml-1"
        >
          <g clip-path="url(#clip0_635_652)">
            <path
              d="M11 11.9166C12.5188 11.9166 13.75 10.6854 13.75 9.16665C13.75 7.64786 12.5188 6.41665 11 6.41665C9.48124 6.41665 8.25002 7.64786 8.25002 9.16665C8.25002 10.6854 9.48124 11.9166 11 11.9166Z"
              stroke="#878787"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11 20.1666C14.6667 16.5 18.3334 13.2167 18.3334 9.16665C18.3334 5.11656 15.0501 1.83331 11 1.83331C6.94993 1.83331 3.66669 5.11656 3.66669 9.16665C3.66669 13.2167 7.33335 16.5 11 20.1666Z"
              stroke="#878787"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_635_652">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <select
          value={location}
          onChange={changeLocation}
          className="w-40 text-lg text-center bg-transparent outline-none cursor-pointer text-slate-700"
        >
          <option value="" className="">
            Location
          </option>

          {Locations.map((city) => (
            <option value={city.name} className="">
              {city.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <g clip-path="url(#clip0_635_647)">
            <path
              d="M19.4333 20.1667C19.69 20.1667 19.8183 20.1667 19.9164 20.1167C20.0026 20.0728 20.0727 20.0026 20.1167 19.9164C20.1666 19.8184 20.1666 19.69 20.1666 19.4333V9.9C20.1666 9.6433 20.1666 9.51496 20.1167 9.41692C20.0727 9.33068 20.0026 9.26056 19.9164 9.21662C19.8183 9.16666 19.69 9.16666 19.4333 9.16666L17.2333 9.16666C16.9766 9.16666 16.8483 9.16666 16.7502 9.21662C16.664 9.26056 16.5939 9.33068 16.5499 9.41692C16.5 9.51496 16.5 9.6433 16.5 9.9V12.1C16.5 12.3567 16.5 12.485 16.45 12.5831C16.4061 12.6693 16.336 12.7394 16.2497 12.7834C16.1517 12.8333 16.0233 12.8333 15.7666 12.8333H13.5666C13.31 12.8333 13.1816 12.8333 13.0836 12.8833C12.9973 12.9272 12.9272 12.9973 12.8833 13.0836C12.8333 13.1816 12.8333 13.31 12.8333 13.5667V15.7667C12.8333 16.0234 12.8333 16.1517 12.7834 16.2497C12.7394 16.336 12.6693 16.4061 12.5831 16.45C12.485 16.5 12.3567 16.5 12.1 16.5H9.89998C9.64329 16.5 9.51494 16.5 9.4169 16.5499C9.33066 16.5939 9.26054 16.664 9.2166 16.7502C9.16665 16.8483 9.16665 16.9766 9.16665 17.2333V19.4333C9.16665 19.69 9.16665 19.8184 9.2166 19.9164C9.26054 20.0026 9.33066 20.0728 9.4169 20.1167C9.51494 20.1667 9.64329 20.1667 9.89998 20.1667L19.4333 20.1667Z"
              stroke="#878787"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.16665 6.23333C9.16665 5.97664 9.16665 5.84829 9.2166 5.75025C9.26054 5.66401 9.33066 5.59389 9.4169 5.54995C9.51494 5.49999 9.64329 5.49999 9.89998 5.49999H12.1C12.3567 5.49999 12.485 5.49999 12.5831 5.54995C12.6693 5.59389 12.7394 5.66401 12.7834 5.75025C12.8333 5.84829 12.8333 5.97664 12.8333 6.23333V8.43333C12.8333 8.69002 12.8333 8.81836 12.7834 8.91641C12.7394 9.00265 12.6693 9.07276 12.5831 9.11671C12.485 9.16666 12.3567 9.16666 12.1 9.16666H9.89998C9.64329 9.16666 9.51494 9.16666 9.4169 9.11671C9.33066 9.07276 9.26054 9.00265 9.2166 8.91641C9.16665 8.81836 9.16665 8.69002 9.16665 8.43333V6.23333Z"
              stroke="#878787"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.74998 11.7333C2.74998 11.4766 2.74998 11.3483 2.79993 11.2502C2.84388 11.164 2.91399 11.0939 3.00023 11.0499C3.09828 11 3.22662 11 3.48331 11H5.68331C5.94 11 6.06835 11 6.16639 11.0499C6.25263 11.0939 6.32275 11.164 6.36669 11.2502C6.41665 11.3483 6.41665 11.4766 6.41665 11.7333V13.9333C6.41665 14.19 6.41665 14.3184 6.36669 14.4164C6.32275 14.5026 6.25263 14.5728 6.16639 14.6167C6.06835 14.6667 5.94 14.6667 5.68331 14.6667H3.48331C3.22662 14.6667 3.09828 14.6667 3.00023 14.6167C2.91399 14.5728 2.84388 14.5026 2.79993 14.4164C2.74998 14.3184 2.74998 14.19 2.74998 13.9333V11.7333Z"
              stroke="#878787"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.83331 2.56666C1.83331 2.30997 1.83331 2.18163 1.88327 2.08358C1.92721 1.99734 1.99733 1.92723 2.08357 1.88328C2.18161 1.83333 2.30996 1.83333 2.56665 1.83333H4.76665C5.02334 1.83333 5.15168 1.83333 5.24973 1.88328C5.33597 1.92723 5.40608 1.99734 5.45002 2.08358C5.49998 2.18163 5.49998 2.30997 5.49998 2.56666V4.76666C5.49998 5.02335 5.49998 5.1517 5.45002 5.24974C5.40608 5.33598 5.33597 5.4061 5.24973 5.45004C5.15168 5.49999 5.02334 5.49999 4.76665 5.49999H2.56665C2.30996 5.49999 2.18161 5.49999 2.08357 5.45004C1.99733 5.4061 1.92721 5.33598 1.88327 5.24974C1.83331 5.1517 1.83331 5.02335 1.83331 4.76666V2.56666Z"
              stroke="#878787"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_635_647">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <select
          value={area}
          onChange={changeArea}
          className="w-48 text-lg text-center bg-transparent outline-none cursor-pointer text-slate-700"
        >
          <option value="" className="h-10">
            Neighbourhood
          </option>
          {Areas.map((area) => (
            <option value={area} className="">
              {area}
            </option>
          ))}
        </select>
      </div>
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <g clip-path="url(#clip0_635_647)">
            <path
              d="M19.4333 20.1667C19.69 20.1667 19.8183 20.1667 19.9164 20.1167C20.0026 20.0728 20.0727 20.0026 20.1167 19.9164C20.1666 19.8184 20.1666 19.69 20.1666 19.4333V9.9C20.1666 9.6433 20.1666 9.51496 20.1167 9.41692C20.0727 9.33068 20.0026 9.26056 19.9164 9.21662C19.8183 9.16666 19.69 9.16666 19.4333 9.16666L17.2333 9.16666C16.9766 9.16666 16.8483 9.16666 16.7502 9.21662C16.664 9.26056 16.5939 9.33068 16.5499 9.41692C16.5 9.51496 16.5 9.6433 16.5 9.9V12.1C16.5 12.3567 16.5 12.485 16.45 12.5831C16.4061 12.6693 16.336 12.7394 16.2497 12.7834C16.1517 12.8333 16.0233 12.8333 15.7666 12.8333H13.5666C13.31 12.8333 13.1816 12.8333 13.0836 12.8833C12.9973 12.9272 12.9272 12.9973 12.8833 13.0836C12.8333 13.1816 12.8333 13.31 12.8333 13.5667V15.7667C12.8333 16.0234 12.8333 16.1517 12.7834 16.2497C12.7394 16.336 12.6693 16.4061 12.5831 16.45C12.485 16.5 12.3567 16.5 12.1 16.5H9.89998C9.64329 16.5 9.51494 16.5 9.4169 16.5499C9.33066 16.5939 9.26054 16.664 9.2166 16.7502C9.16665 16.8483 9.16665 16.9766 9.16665 17.2333V19.4333C9.16665 19.69 9.16665 19.8184 9.2166 19.9164C9.26054 20.0026 9.33066 20.0728 9.4169 20.1167C9.51494 20.1667 9.64329 20.1667 9.89998 20.1667L19.4333 20.1667Z"
              stroke="#878787"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.16665 6.23333C9.16665 5.97664 9.16665 5.84829 9.2166 5.75025C9.26054 5.66401 9.33066 5.59389 9.4169 5.54995C9.51494 5.49999 9.64329 5.49999 9.89998 5.49999H12.1C12.3567 5.49999 12.485 5.49999 12.5831 5.54995C12.6693 5.59389 12.7394 5.66401 12.7834 5.75025C12.8333 5.84829 12.8333 5.97664 12.8333 6.23333V8.43333C12.8333 8.69002 12.8333 8.81836 12.7834 8.91641C12.7394 9.00265 12.6693 9.07276 12.5831 9.11671C12.485 9.16666 12.3567 9.16666 12.1 9.16666H9.89998C9.64329 9.16666 9.51494 9.16666 9.4169 9.11671C9.33066 9.07276 9.26054 9.00265 9.2166 8.91641C9.16665 8.81836 9.16665 8.69002 9.16665 8.43333V6.23333Z"
              stroke="#878787"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.74998 11.7333C2.74998 11.4766 2.74998 11.3483 2.79993 11.2502C2.84388 11.164 2.91399 11.0939 3.00023 11.0499C3.09828 11 3.22662 11 3.48331 11H5.68331C5.94 11 6.06835 11 6.16639 11.0499C6.25263 11.0939 6.32275 11.164 6.36669 11.2502C6.41665 11.3483 6.41665 11.4766 6.41665 11.7333V13.9333C6.41665 14.19 6.41665 14.3184 6.36669 14.4164C6.32275 14.5026 6.25263 14.5728 6.16639 14.6167C6.06835 14.6667 5.94 14.6667 5.68331 14.6667H3.48331C3.22662 14.6667 3.09828 14.6667 3.00023 14.6167C2.91399 14.5728 2.84388 14.5026 2.79993 14.4164C2.74998 14.3184 2.74998 14.19 2.74998 13.9333V11.7333Z"
              stroke="#878787"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.83331 2.56666C1.83331 2.30997 1.83331 2.18163 1.88327 2.08358C1.92721 1.99734 1.99733 1.92723 2.08357 1.88328C2.18161 1.83333 2.30996 1.83333 2.56665 1.83333H4.76665C5.02334 1.83333 5.15168 1.83333 5.24973 1.88328C5.33597 1.92723 5.40608 1.99734 5.45002 2.08358C5.49998 2.18163 5.49998 2.30997 5.49998 2.56666V4.76666C5.49998 5.02335 5.49998 5.1517 5.45002 5.24974C5.40608 5.33598 5.33597 5.4061 5.24973 5.45004C5.15168 5.49999 5.02334 5.49999 4.76665 5.49999H2.56665C2.30996 5.49999 2.18161 5.49999 2.08357 5.45004C1.99733 5.4061 1.92721 5.33598 1.88327 5.24974C1.83331 5.1517 1.83331 5.02335 1.83331 4.76666V2.56666Z"
              stroke="#878787"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_635_647">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <select className="w-40 text-lg text-center bg-transparent outline-none cursor-pointer text-slate-700">
          <option value="" className="">
            Category
          </option>
          <option value="chiropractor" className="">
            Chiropractor
          </option>
          <option value="paincare" className="">
            Pain Care
          </option>
          <option value="orthophysio" className="">
            Ortho Physio
          </option>
          <option value="sportsphysio" className="">
            Sports Physio
          </option>
          <option value="pediatriccare" className="">
            Pediatric Care
          </option>
          <option value="neurophysio" className="">
            Neuro Physio
          </option>
        </select>
      </div>
      <div>
        <button
          className="w-[94px] h-[35px] p-1 font-bold text-white bg-green-500 rounded-md"
          onClick={() => navigate("/doctors")}
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
