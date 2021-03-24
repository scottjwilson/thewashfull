import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
const ServiceItem = ({ service }) => {
  const { title, sizes, includes, price } = service;

  const allIncludes = {};
  Object.assign(allIncludes, includes);
  const includesArray = Object.values(allIncludes);

  const allSizes = {};
  Object.assign(allSizes, sizes);
  const sizesPrices = Object.values(allSizes);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl uppercase">{title}</h1>
      {price}
      <ul>
        {includesArray.map((i) => (
          <li>{i}</li>
        ))}
      </ul>

      <div className="grid grid-cols-2">
        {sizesPrices.map((size) => (
          <div className="bg-blue-100 w-32 p-4 m-2">
            <h1>{size.size}</h1>
            <h2>+ ${size.price}</h2>
          </div>
        ))}
      </div>

      <button className="py-2 px-4 rounded-md bg-gray-200 hover:bg-blue-200 duration-300 ease-in-out">
        Let's go!
      </button>
    </div>
  );
};

export default ServiceItem;
