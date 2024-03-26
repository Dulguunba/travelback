"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRouts = exports.createRouts = void 0;
const travel_1 = require("../models/travel");
const createRouts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { startStation, endStation, duration, vehicle, location, information } = req.body;
    try {
        yield travel_1.travelRout.create({
            startStation,
            endStation,
            duration,
            vehicle,
            location,
            information,
        });
        // const id = await travelRout.find({
        //   startStation,
        //   endStation,
        //   duration,
        //   vehicle,
        //   location,
        //   information,
        // });
        res.status(201).json({ message: "create successfully" });
    }
    catch (error) {
        res.status(401).json({ message: "create faild" });
    }
});
exports.createRouts = createRouts;
const getRouts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getCalendarDb = yield travel_1.travelRout.find({});
        res.send(getCalendarDb);
    }
    catch (error) {
        res.status(401).json({ message: "get faild" });
    }
});
exports.getRouts = getRouts;
