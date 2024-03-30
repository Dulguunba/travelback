"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.travelRout = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const Rout = new Schema({
    startStation: String,
    endStation: String,
    duration: String,
    vehicle: String,
    location: String,
    information: String,
});
exports.travelRout = model("travelRouts", Rout);
