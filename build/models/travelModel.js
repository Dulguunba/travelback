"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelModel = void 0;
const mongoose_1 = require("mongoose");
const travelSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Please insert input"],
    },
    travelCompany: {
        type: String,
        required: [true, "Please insert input"],
    },
    duration: {
        type: Number,
        required: [true, "Please insert input"],
    },
    adultPrice: {
        type: Number,
        required: [true, "Please insert input"],
    },
    childPrice: {
        type: Number,
        required: [true, "Please insert input"],
    },
    IsIncludeFoodCheck: {
        type: Boolean,
        required: [true, "Please insert input"],
    },
    IsIncludeFoodPriceCheck: {
        type: Boolean,
        required: [true, "Please insert input"],
    },
    foodNumber: {
        type: Number,
        required: [true, "Please insert input"],
    },
    foodPrice: {
        type: Number,
        required: [true, "Please insert input"],
    },
    trafficPrice: {
        type: Number,
        required: [true, "Please insert input"],
    },
    IsIncludeTrafficCheck: {
        type: Boolean,
        required: [true, "Please insert input"],
    },
    IsIncludeTrafficPriceCheck: {
        type: Boolean,
        required: [true, "Please insert input"],
    },
    createdAt: {
        type: Date,
        required: [true, "Please insert input"],
    },
    updatedAt: {
        type: Date,
        required: [true, "Please insert input"],
    },
});
exports.TravelModel = (0, mongoose_1.model)("travelinfo", travelSchema);
