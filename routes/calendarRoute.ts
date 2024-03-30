import { Router } from "express";
import {
  createCalendar,
  deleteCalendar,
  getCalendar,
} from "../controllers/calendarControllers";

const calendarRoute = Router();

calendarRoute
  .post("/create", createCalendar)
  .get("/get", getCalendar)
  .delete("/delete", deleteCalendar);

export { calendarRoute };
