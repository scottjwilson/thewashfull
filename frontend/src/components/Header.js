import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";
import logo from "../images/logo.png";

export const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const [isExpanded, toggleExpansion] = useState(false);
  const [isMenuOpen, toggleMenu] = useState(false);

  return (
    <header className="bg-white shadow-sm">
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
              Home
            </a>
            <a
              href="/services"
              className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-secondary mr-"
            >
              Services
            </a>
            <a
              href="/services"
              className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-secondary mr-"
            >
              Contact
            </a>

            <div className="relative">
              {userInfo ? (
                <>
                  <button
                    type="button"
                    class="text-blue-500 group bg-white rounded-md inline-flex items-center  font-medium hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    aria-expanded="false"
                    onClick={() => toggleMenu(!isMenuOpen)}
                  >
                    {userInfo.name}
                    <svg
                      class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  {isMenuOpen && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none "
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <div className="py-1" role="none">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          My Appointments
                        </a>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          My Profile
                        </Link>
                        <form method="POST" action="#" role="none">
                          <button
                            type="submit"
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={logoutHandler}
                          >
                            Sign out
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <a
                  href="/login"
                  className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-secondary mr-"
                >
                  Login
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
