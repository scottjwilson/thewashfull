import React from "react";
import hero from "../../images/hero.jpg";

export const Hero = () => {
  return (
    <header className="bg-primary pt-8 rounded-b-3xl">
      <div className="h-screen lg:grid grid-cols-2 items-center container mx-auto px-2 sm:px-0">
        <div className="flex flex-col py-2 lg:py-8 md:mx-2">
          <div className="w-64 sm:w-full">
            <h1 className="font-title text-4xl md:text-6xl lg:text-8xl font-semibold text-gray-800 tracking-wide leading-tight">
              FASTEST AND DETAILED <br />
              <span className="text-secondary">CAR WASH</span>
            </h1>
          </div>
          <div className="flex lg:py-6">
            <button
              type="button"
              className="text-sm font-bold md:py-4 py-2 px-4 md:px-8 my-6 bg-white rounded-md shadow flex items-center"
            >
              Learn More
              <svg
                className="h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
            <button
              type="button"
              className="text-sm font-bold md:py-4 py-2 px-6 md:px-8 my-6 md:mx-6 ml-4 bg-white rounded-md shadow flex items-center "
            >
              Contact Us{" "}
              <svg
                className="h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="md:mx-2">
          <img className="rounded-md shadow-2xl" src={hero} />
        </div>
      </div>
    </header>
  );
};
