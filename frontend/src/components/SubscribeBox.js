import React from "react";

const SubscribeBox = () => {
  return (
    <section className="bg-blue-900 sm:py-24 py-12 px-6 md:h-96 lg:h-full md:flex md:items-center md:justify-center">
      {/* Full Row */}
      <div className="md:flex md:items-center md:justify-center md:container">
        {/* First Column */}
        <div className="lg:w-5/12">
          <h1 className="text-white text-3xl md:text-3xl lg:text-5xl font-bold uppercase leading-10">
            subscribe to our newsletter to get weekly updates
          </h1>

          <div className="my-2 lg:my-6">
            <p className="text-white font-bold ">
              Through continuous research and development, Mister Car Wash
              champions
            </p>
          </div>
          {/* FORM ROW */}
          <div className="flex xs:justify-center md:justify-start my-8">
            <form action="submit">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-md py-3 px-6 "
                />
                <button type="button" className="rounded-md bg-white mx-2">
                  <svg
                    className="h-full"
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
            </form>
          </div>
        </div>
        {/* SECOND COLUMN */}
        <div className="flex justify-center">
          <div className="p-8 bg-gray-50 bg-opacity-5 rounded-lg md:w-8/12">
            <div className="flex flex-col justify-center">
              <h1 className="text-secondary text-4xl lg:text-6xl font-bold uppercase">
                30% off
              </h1>
              <p className="text-xl font-light text-white py-2 lg:py-6">
                Get up to 30% off discount on your first car wash
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeBox;
