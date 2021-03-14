import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
export const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <header className="bg-white shadow-lg">
      <nav className="container mx-auto flex items-center justify-between flex-wrap py-4 px-2 sm:px-0">
        <Link to="/">
          <img src={logo} className="h-12" alt="mobile wash" />
        </Link>

        <div className="block sm:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-primary hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block sm:flex sm:items-center sm:w-auto`}
        >
          <div
            className="text-sm flex justify-between w-96
          "
          >
            <a
              href="/"
              className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-secondary mr-"
            >
              About
            </a>
            <a
              href="/services"
              className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-secondary mr-"
            >
              Services
            </a>
            <a
              href="/"
              className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-secondary mr-"
            >
              Schedule Appointment
            </a>
            <a
              href="/"
              className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-secondary mr-"
            >
              Sign In
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
