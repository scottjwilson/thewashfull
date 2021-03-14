import mongoose from "mongoose";

const slotSchema = mongoose.Schema({
  slot_time: String,
  slot_date: String,
  created_at: Date,
});

const Slot = mongoose.model("Slot", slotSchema);

export default Slot;
