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
exports.getCalendar = exports.createCalendar = void 0;
const travel_1 = require("../models/travel");
const createCalendar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { startTimes, endTime, startDay, endDay } = req.body;
    try {
        const createCalender = yield travel_1.travelCalendar.create({
            startTimes,
            endTime,
            startDay,
            endDay,
        });
        res.status(201).json({ message: "create successfully" });
    }
    catch (error) {
        res.status(401).json({ message: "create faild" });
    }
});
exports.createCalendar = createCalendar;
const getCalendar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getCalendarDb = yield travel_1.travelCalendar.find({}).skip(5).limit(10);
        res.send(getCalendarDb);
    }
    catch (error) {
        res.status(401).json({ message: "get faild" });
    }
});
exports.getCalendar = getCalendar;
