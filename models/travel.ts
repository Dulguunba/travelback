import mongoose from "mongoose";
const { Schema, model } = mongoose;
const Rout = new Schema({
  startStation: String,
  endStation: String,
  duration: String,
  vehicle: String,
  location: String,
  information: String,
});

export const travelRout = model("travelRouts", Rout);
