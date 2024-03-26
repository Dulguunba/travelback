import { travelRout } from "../models/travel";
import { json, Request, Response } from "express";

export const createRout = async (req: Request, res: Response) => {
  try {
    console.log("body", req.file);
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
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const getRout = async (req: Request, res: Response) => {
  try {
    const getData = await travelRout.find({});
    res.send(getData);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteRout = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    console.log(id);
    const deleteRows = await travelRout.deleteOne({ _id: id });
    res.status(201).send("amjilttai ustaglaa");
  } catch (error) {
    res.status(401).send("ustagj cadsangue");
  }
};
