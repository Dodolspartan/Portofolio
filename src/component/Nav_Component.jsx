import React, { useState } from "react";
import image3 from "../asset/404309179_1401811587420983_3285425996600780435_n.jpg";
function Nav_Component() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (index) => {
    setActiveIndex(index);
    setIsMenuOpen(false); // Tutup menu setelah memilih item
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="element-navbar-component py-4">
      <div className="navbar-start">
        <div className="w-11 rounded-full">
          <img
            className="rounded-full border border-gray-900"
            alt="Tailwind CSS Navbar component"
            src={image3}
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle border border-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-28 p-2 shadow">
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav_Component;
