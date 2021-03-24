import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listServices } from "../actions/serviceActions";
import PageHero from "../components/PageHero";

const BookAppointmentScreen = ({ history }) => {
  const dispatch = useDispatch();

  //USER STATE
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  //SERVICE STATE
  const serviceList = useSelector((state) => state.serviceList);
  const {
    loading: serviceLoading,
    error: serviceError,
    services,
  } = serviceList;

  //FORM STATE
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [vehicle, setVehicle] = useState("");

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [history, userInfo]);

  const handleServiceChange = (e) => {
    setService(e.target.value);
  };

  const handleVehicleChange = (e) => {
    setVehicle(e.target.value);
  };

  const allSizes = {};
  Object.assign(
    allSizes,
    services.map((ser) => ser.sizes)
  );
  const sizesPrices = Object.values(allSizes);

  return (
    <>
      <PageHero
        title="Book your car appointment"
        text="Simply the best, most effecient car detailer in your area."
      />
      <div>{JSON.stringify(sizesPrices[0])}</div>

      <div className="bg-white w-10/12 m-auto my-10 shadow-md -mt-20 rounded-lg">
        <div className="py-8 px-8 rounded-xl">
          <h1 className="uppercase font-black text-2xl mt-3 text-center">
            appointment details
          </h1>

          <form className="mt-6">
            <div className="my-5 text-sm">
              <label for="email" className="block text-black">
                Choose your service
              </label>
              {service.title}

              <select value={service} onChange={handleServiceChange}>
                {services.map((service) => (
                  <option value={service.title}>{service.title}</option>
                ))}
              </select>

              <input
                type="email"
                autofocus
                id="email"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-5 text-sm">
              <label for="email" className="block textpappoint-black">
                For what size vehicle?
              </label>

              <select value={vehicle} onChange={handleVehicleChange}>
                {sizesPrices.map((size) => (
                  <option value={size.size}>{size.price}</option>
                ))}
              </select>
            </div>
            <div>{vehicle}</div>

            <div className="flex justify-end mt-2 text-xs text-gray-600">
              The date and time you requested may not be available
            </div>

            <button className="uppercase flex justify-center items-center font-black text-center text-white bg-blue-700 p-3 duration-300 rounded-md hover:bg-blue-900 w-full">
              Submit
              <div className="w-4 ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookAppointmentScreen;
