// FilterSidebar.js
import React from "react";
import { BsStarFill } from "react-icons/bs";
const FilterSideBar = () => {
  return (
    <aside className="w-72" aria-label="Sidebar">
      <div className="px-3 py-4 overflow-y-auto rounded">
        <div>
          <h3 className="text-2xl font-medium text-gray-900">FILTER BY</h3>
        </div>
        <div className="h-1 mt-3 bg-zinc-300 shrink-0" />{" "}
        <div className="mt-4">
          <h4 className="mb-2 text-xl font-medium text-gray-900">Experience</h4>
          <div className="text-md">
            <button>5+ Year of Experience</button>
            <button>10+ Year of Experience</button>
            <button>12+ Year of Experience</button>
            <button>15+ Year of Experience</button>
          </div>
        </div>
        <div className="h-1 mt-4 bg-zinc-300 shrink-0" />{" "}
        {/* Repeat the pattern for other categories */}
        <div className="mt-4">
          <h4 className="mb-2 text-xl font-medium text-gray-900">
            Specialisation
          </h4>
          <div className="text-md">
            <button className="block">Chiropractor</button>
            <button className="block">Pain Care</button>
            <button className="block">Ortho Physio</button>
            <button className="block">Sports Physio</button>
            <button className="block">Pediatric Care</button>
            <button className="block">Neuro Physio</button>
            <button className="block">Psychologist</button>
            <button className="block">Therapist</button>
          </div>
        </div>
        <div className="h-1 mt-3 bg-zinc-300 shrink-0" />{" "}
        <div className="mt-4">
          <h4 className="mb-2 text-xl font-medium text-gray-900">
            Availability
          </h4>
          <div className="text-md">
            <button className="block">Into an hour</button>
            <button className="block">Into 4 hours</button>
            <button className="block">Today</button>
            <button className="block">Tommorow</button>
          </div>
        </div>
        <div className="h-1 mt-4 bg-zinc-300 shrink-0" />{" "}
        <div className="mt-4">
          <h4 className="mb-2 text-xl font-medium text-gray-900">Ratings</h4>
          <div className="flex space-x-1 text-sm">
            {/* List of rating options */}
            <button className="flex justify-center w-12 gap-1 py-1 border rounded-3xl h-7 border-emerald-400">
              2
              <BsStarFill color="yellow" className="mt-0.5" />
            </button>
            <button className="flex justify-center w-12 gap-1 py-1 border rounded-3xl h-7 border-emerald-400">
              3
              <BsStarFill color="yellow" className="mt-0.5" />
            </button>
            <button className="flex justify-center w-12 gap-1 py-1 border rounded-3xl h-7 border-emerald-400">
              4
              <BsStarFill color="yellow" className="mt-0.5" />
            </button>
            <button className="flex justify-center w-12 gap-1 py-1 border rounded-3xl h-7 border-emerald-400">
              5
              <BsStarFill color="yellow" className="mt-0.5" />
            </button>
            <button className="flex justify-center w-12 gap-1 py-1 border rounded-3xl h-7 border-emerald-400">
              All
            </button>
            {/* ... other rating options ... */}
          </div>
        </div>
        <div className="h-1 mt-4 bg-zinc-300 shrink-0" />{" "}
        <div className="mt-4">
          <h4 className="mb-2 text-xl font-semibold text-green-700">
            Location (Nearest First)
          </h4>
          {/* Add location filter options here if applicable */}
        </div>
      </div>
    </aside>
  );
};

export default FilterSideBar;
