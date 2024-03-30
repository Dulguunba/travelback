"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.travelRouter = void 0;
const express_1 = require("express");
const travelController_1 = require("../controllers/travelController");
const travelRouter = (0, express_1.Router)();
exports.travelRouter = travelRouter;
travelRouter.post("/create", travelController_1.createTravel);
