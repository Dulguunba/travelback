"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calendarRoute = void 0;
const express_1 = require("express");
const calendarControllers_1 = require("../controllers/calendarControllers");
const calendarRoute = (0, express_1.Router)();
exports.calendarRoute = calendarRoute;
calendarRoute
    .post("/create", calendarControllers_1.createCalendar)
    .get("/get", calendarControllers_1.getCalendar)
    .delete("/delete", calendarControllers_1.deleteCalendar);
