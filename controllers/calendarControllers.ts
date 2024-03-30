import { Request, Response } from "express";
import { travelCalendar } from "../models/calendarModel";
import { addHours } from "date-fns";

export const createCalendar = async (req: Request, res: Response) => {
  try {
    const { startTime, endTime } = req.body;
    const startAddHours = addHours(new Date(startTime), 8);
    const endAddHours = addHours(new Date(endTime), 8);
    const create = await travelCalendar.create({
      startTime: startAddHours,
      endTime: endAddHours,
    });
    res.status(200).send("successfully");
  } catch (error) {
    res.status(400).json({ message: "faild create", error: error });
  }
};

export const getCalendar = async (req: Request, res: Response) => {
  try {
    const getDb = await travelCalendar.find({});
    res.send(getDb);
  } catch (error) {
    res.status(400).send(error);
  }
};
export const deleteCalendar = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const deleteNote = await travelCalendar.deleteOne({ _id: id });
    res.status(201).json({ message: "all delete ok" });
  } catch (error) {
    res.status(401).json({ message: "failed delete" });
  }
};
