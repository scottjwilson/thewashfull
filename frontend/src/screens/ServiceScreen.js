import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import PageHero from "../components/PageHero";
import ServiceItem from "../components/ServiceItem";
import { Link } from "react-router-dom";
import { listServiceDetails } from "../actions/serviceActions";

const ServiceScreen = ({ match }) => {
  const dispatch = useDispatch();

  const serviceDetails = useSelector((state) => state.serviceDetails);
  const { loading, error, service } = serviceDetails;

  useEffect(() => {
    dispatch(listServiceDetails(match.params.id));
  }, [dispatch, match]);
  //
  return (
    <>
      <div className="container mx-auto">
        <Link to="/services">
          <button className="py-2 px-4 my-2 rounded-md bg-gray-100 hover:bg-blue-200 duration-300 ease-in-out">
            Go back
          </button>
        </Link>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          <ServiceItem service={service} />
        )}
      </div>
    </>
  );
};

export default ServiceScreen;
