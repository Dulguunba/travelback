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
exports.deleteRout = exports.getRout = exports.createRout = void 0;
const travel_1 = require("../models/travel");
const createRout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("file", req.file);
        console.log("body", req.body.image);
        // const {
        //   startStation,
        //   endStation,
        //   duration,
        //   vehicle,
        //   location,
        //   information,
        // } = JSON.parse(req.body.information);
        // const create = await travelRout.create({
        //   startStation,
        //   endStation,
        //   duration,
        //   vehicle,
        //   location,
        //   information,
        // });
        res.status(201).json({ message: " create routs" });
    }
    catch (error) {
        res.status(400).json({ message: error });
    }
});
exports.createRout = createRout;
const getRout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getData = yield travel_1.travelRout.find({});
        res.send(getData);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.getRout = getRout;
const deleteRout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        console.log(id);
        const deleteRows = yield travel_1.travelRout.deleteOne({ _id: id });
        res.status(201).send("amjilttai ustaglaa");
    }
    catch (error) {
        res.status(401).send("ustagj cadsangue");
    }
});
exports.deleteRout = deleteRout;
