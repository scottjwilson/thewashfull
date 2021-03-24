import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  return (
    <>
      <article className="bg-white">
        <div className="flex flex-col lg:p-24 md:p-12 p-6 ">
          <h1 className="text-secondary text-3xl md:text-5xl font-bold">
            ${service.price}
          </h1>
          <h2 className="text-gray-700 md:text-2xl text-xl uppercase font-semibold">
            {service.title}
          </h2>
          <div className="py-4 flex">
            <ul>
              {service.includes.map((include) => (
                <li key={include} className="flex capitalize">
                  <svg
                    className="w-6 h-6 mr-2 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {include}
                </li>
              ))}
            </ul>
          </div>
          <Link to={`/services/${service._id}`}>
            <button className="py-2 px-4 rounded-md bg-gray-200 hover:bg-blue-200 duration-300 ease-in-out">
              Request Appointment
            </button>
          </Link>
        </div>
      </article>
    </>
  );
};

export default Service;
