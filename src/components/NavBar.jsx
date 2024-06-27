import { useState } from "react";
import NavBrand from "../assets/navbrand.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition transform ease-in-out delay-150"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="w-full flex-1 flex items-center justify-between sm:items-stretch sm:justify-end">
            <div className="flex-shrink-0 w-[40%]">
              <img src={NavBrand} alt="" />
            </div>
            <div className="hidden sm:block sm:ml-6 w-[60%]">
              <div className="flex space-x-4">
                <ul className="list-none sm:flex hidden justify-start items-center flex-1 gap-[50px] pl-[50px]">
                  <li
                    className={`font-roboto px-3 py-2 rounded-md text-sm font-normal cursor-pointer text-[16px] text-navTextColor hover:text-[#7a7a7a]`}
                  >
                    <NavLink exact="true" to="/" activeclassname="active">
                      Home
                    </NavLink>
                  </li>
                  <li
                    className={`font-roboto px-3 py-2 rounded-md text-sm font-normal cursor-pointer text-[16px] text-navTextColor hover:text-[#7a7a7a]`}
                  >
                    <NavLink to="gallery/" activeclassname="active">
                      Gallery
                    </NavLink>
                  </li>
                  <li
                    className={`font-roboto px-3 py-2 rounded-md text-sm font-normal cursor-pointer text-[16px] text-navTextColor hover:text-[#7a7a7a]`}
                  >
                    <NavLink to="projects/" activeclassname="active">
                      Projects
                    </NavLink>
                  </li>
                  <li
                    className={`font-roboto px-3 py-2 rounded-md text-sm font-normal cursor-pointer text-[16px] text-navTextColor hover:text-[#7a7a7a]`}
                  >
                    <NavLink to="certifications/" activeclassname="active">
                      Certifications
                    </NavLink>
                  </li>
                  <li
                    className={`font-roboto px-3 py-2 rounded-md text-sm font-normal cursor-pointer text-[16px] text-navTextColor hover:text-[#7a7a7a]`}
                  >
                    <NavLink to="contacts/" activeclassname="active">
                      Contacts
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} sm:hidden  bg-[#eee] w-[60%] h-screen flex absolute inset-y-[70px] right-0 z-10 transition transform ease-in-out delay-150 rounded-tl-[5px] pt-[20px] gap-[50px]`}
        id="mobile-menu" 
      >
        <div className="px-2 pt-2 pb-3 space-y-1 flex justify-end">
          <ul className="list-none sm:flex justify-end items-end flex-1 gap-[70px]">
            <li
              className={`font-roboto px-3 py-2 rounded-md text-sm font-normal cursor-pointer text-[16px] text-navTextColor hover:text-[#7a7a7a]`}
            >
              <NavLink exact="true" to="/" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li
              className={`font-roboto px-3 py-2 rounded-md text-sm font-normal cursor-pointer text-[16px] text-navTextColor hover:text-[#7a7a7a]`}
            >
              <NavLink to="gallery/" activeclassname="active">
                Gallery
              </NavLink>
            </li>
            <li
              className={`font-roboto px-3 py-2 rounded-md text-sm font-normal cursor-pointer text-[16px] text-navTextColor hover:text-[#7a7a7a]`}
            >
              <NavLink to="projects/" activeclassname="active">
                Projects
              </NavLink>
            </li>
            <li
              className={`font-roboto px-3 py-2 rounded-md text-sm font-normal cursor-pointer text-[16px] text-navTextColor hover:text-[#7a7a7a]`}
            >
              <NavLink to="certifications/" activeclassname="active">
                Certifications
              </NavLink>
            </li>
            <li
              className={`font-roboto px-3 py-2 rounded-md text-sm font-normal cursor-pointer text-[16px] text-navTextColor hover:text-[#7a7a7a]`}
            >
              <NavLink to="contacts/" activeclassname="active">
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
