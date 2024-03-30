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
exports.deleteCalendar = exports.getCalendar = exports.createCalendar = void 0;
const calendarModel_1 = require("../models/calendarModel");
const date_fns_1 = require("date-fns");
const createCalendar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { startTime, endTime } = req.body;
        const startAddHours = (0, date_fns_1.addHours)(new Date(startTime), 8);
        const endAddHours = (0, date_fns_1.addHours)(new Date(endTime), 8);
        const create = yield calendarModel_1.travelCalendar.create({
            startTime: startAddHours,
            endTime: endAddHours,
        });
        res.status(200).send("successfully");
    }
    catch (error) {
        res.status(400).json({ message: "faild create", error: error });
    }
});
exports.createCalendar = createCalendar;
const getCalendar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getDb = yield calendarModel_1.travelCalendar.find({});
        res.send(getDb);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.getCalendar = getCalendar;
const deleteCalendar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        const deleteNote = yield calendarModel_1.travelCalendar.deleteOne({ _id: id });
        res.status(201).json({ message: "all delete ok" });
    }
    catch (error) {
        res.status(401).json({ message: "failed delete" });
    }
});
exports.deleteCalendar = deleteCalendar;
