import React, { useState } from "react";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex items-center justify-between bg-gray-100 p-3 px-8 lg:px-40">
      {/* logo section */}
      <Link to={"/"} className="flex items-center">
        <BoltIcon className="h-6 w-6 text-blue-500" />
        <span className="text-2xl font-bold ml-2 text-gray-800 tracking-wide">
          nextPage
        </span>
      </Link>
      {/* menu sections */}
      <ul className="lg:flex hidden">
        <li className="space-x-8 font-bold ">
          <NavLink
            to={"/"}
            title="Home Link"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Home
          </NavLink>

          <NavLink
            to={"/books"}
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Books
          </NavLink>

          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            About Us
          </NavLink>
        </li>
      </ul>

      {/* Mobile Navbar Section */}
      <div className="lg:hidden">
        {/* Dropdown Open Button */}
        <button
          aria-label="Open Menu"
          title="Open Menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <Bars3BottomRightIcon className="w-5 text-gray-600" />
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full z-10">
            <div className="p-5 bg-white border rounded shadow-sm">
              {/* Logo & Button section */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link to="/" className="inline-flex items-center">
                    <BoltIcon className="h-6 w-6 text-blue-500" />
                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                      nextPage
                    </span>
                  </Link>
                </div>
                {/* Dropdown menu close button */}
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <XMarkIcon className="w-5 text-gray-600" />
                  </button>
                </div>
              </div>
              {/* Mobile Nav Items Section */}
              <nav>
                <ul className="space-y-4">
                  <li>
                    <Link
                      to="/"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/books"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                    >
                      Books
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
