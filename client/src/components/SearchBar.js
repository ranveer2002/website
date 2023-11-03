import { useState } from "react";


const SearchBar = () => {
   const Locations = [
      {
        name : "Jaipur",
        areas : [
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
                "Sanganer"
        ]
      },
      {
        name : "Delhi",
        areas : [
            "area1",
            "area1",
            "area1",
            "area1",

        ]
      }
   ];

   const [location,setLocation] = useState("Location");
   const [area,setArea] = useState("Area");
   const [Areas,setAreas] = useState([]);
   const changeLocation = (event)=>{
      setLocation(event.target.value);
      setAreas(Locations.find(city => city.name === event.target.value).areas);
   }
   const changeArea = (event)=>{
      setArea(event.target.value);
   }
   return(
       <div className="w-[712px] h-[64px] rounded-md border border-neutral-500 flex items-center justify-around mt-14 mx-auto">
           <div>
              <select value={location} onChange={changeLocation} className="bg-transparent outline-none w-40 text-slate-700 text-lg cursor-pointer border border-slate-400 rounded-md py-1">
                <option value="" className="">Location</option>
                {
                    Locations.map((city)=>(
                        <option value={city.name} className="">{city.name}</option>
                    ))
                }
              </select>  
           </div>
           <div className="relative">
              <select value={area} onChange={changeArea} className="bg-transparent outline-none w-40 text-slate-700 text-lg cursor-pointer border border-slate-400 rounded-md py-1">
                <option value="" className="">Area</option>
                {
                    Areas.map((area)=>(
                        <option value={area} className="">{area}</option>
                    ))
                }
              </select>  
           </div>
           <div>
           <select className="text-slate-700 text-lg bg-transparent outline-none cursor-pointer border border-slate-400 rounded-md py-1 w-40">
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
           <button className="w-[94px] h-[35px] p-1 font-bold text-white bg-green-500 rounded-md">
            Search
          </button>
           </div>
       </div>
   );
}
export default SearchBar;