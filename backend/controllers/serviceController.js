import asyncHandler from "express-async-handler";
import Service from "../models/serviceModel.js";

// @desc Fetch all services
// @route GET /api/services
// @access Public
const getServices = asyncHandler(async (req, res) => {
  const services = await Service.find({});
  res.json(services);
});

// @desc Fetch single service
// @route GET /api/services/:id
// @access Public
const getServiceById = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (service) {
    res.json(service);
  } else {
    res.status(404).json({ messsage: "Service not found" });
  }
});

export { getServices, getServiceById };
