import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageHero from "../components/PageHero";
import Service from "../components/Service";
import { listServices } from "../actions/serviceActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const PricingScreen = () => {
  const dispatch = useDispatch();
  const serviceList = useSelector((state) => state.serviceList);
  const { loading, error, services } = serviceList;
  useEffect(() => {
    dispatch(listServices());
  }, [dispatch]);

  return (
    <>
      <PageHero
        title="Check out our services, fam."
        text="Simply the best, most effecient car detailer in your area."
      />
      <section>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          <div className="grid lg:grid-cols-3 -mt-20 shadow-2xl container mx-auto">
            {services.map((service) => {
              return <Service service={service} />;
            })}
          </div>
        )}
      </section>
    </>
  );
};

export default PricingScreen;
