import { TravelModel } from "../models/travelModel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const createTravel = async (req: Request, res: Response) => {
  const {
    travelName,
    travelCompany,
    duration,
    adultPrice,
    childPrice,
    IsIncludeFoodCheck,
    IsIncludeFoodPriceCheck,
    foodNumber,
    foodPrice,
    IsIncludeTrafficCheck,
    IsIncludeTrafficPriceCheck,
    trafficPrice,
  } = req.body;
  try {
    const newTravel = await TravelModel.create({
      name: travelName,
      travelCompany,
      duration,
      adultPrice,
      childPrice,
      IsIncludeFoodCheck,
      IsIncludeFoodPriceCheck,
      foodNumber,
      foodPrice,
      IsIncludeTrafficCheck,
      IsIncludeTrafficPriceCheck,
      trafficPrice,
    });
    res
      .status(200)
      .json({ message: "successfully created category", result: newTravel });
  } catch (error) {
    console.log("failt to create travel", error);
    res.status(400).json({ message: "fail to create travel " });
  }
};
