import React, { useState } from "react";
import { Link } from "react-router-dom";

const RespNavbar = () => {
  const [activePage, setActivePage] = useState(null);

  const pages = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Fit-to-Play", path: "/fit-to-play" },
    { id: 3, name: "Player+", path: "/player+" },
    { id: 4, name: "Physio Connect", path: "/physioconnect" },
    { id: 5, name: "Products", path: "/products" },
  ];

  const handlePageClick = (pageId) => {
    setActivePage(pageId);
  };

  return (
    <nav className="mt-7">
      <ul className="flex">
        {pages.map((page) => (
          <Link to={page.path} key={page.id}>
            <li
              key={page.id}
              className={`text-base font-normal px-5 cursor-pointer ${
                activePage === page.id
                  ? "bg-green-50 text-black rounded-md p-1 transition-transform hover:scale-105 "
                  : "hover:bg-gray-50 rounded-md p-1 transition transform hover:scale-105"
              }`}
              onClick={() => handlePageClick(page.id)}
            >
              <span
                className={`block transition-transform ${
                  activePage === page.id ? "translate-x-2" : "translate-x-0"
                }`}
              ></span>
              {page.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default RespNavbar;
