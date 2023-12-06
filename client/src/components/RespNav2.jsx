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
    <nav className="fixed w-[250px] border-r border-white h-screen px-3 ease-in-out duration-700 bg-white">
      <ul className="">
        {pages.map((page) => (
          <Link to={page.path} key={page.id}>
            <li
              key={page.id}
              className={`text-xl text-black my-2 font-medium cursor-pointer`}
              onClick={() => handlePageClick(page.id)}
            >
              <span
                className={`block`}
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
