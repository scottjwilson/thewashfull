import mongoose from "mongoose";

const vehicleSizes = mongoose.Schema({
  size: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const serviceSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    includes: {
      type: Array,
      required: true,
    },
    sizes: [vehicleSizes],
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("Service", serviceSchema);

export default Service;
