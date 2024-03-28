import { TravelModel } from "../models/travelModel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const createTravel = async (req: Request, res: Response) => {
  const {
    name,
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
  console.log(
    name,
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
    trafficPrice
  );

  try {
    const newTravel = await TravelModel.create({
      name: name,
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
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res
      .status(200)
      .json({ message: "successfully created travel info", result: newTravel });
  } catch (error) {
    console.log("failt to create travel", error);
    res.status(400).json({ message: "fail to create travel " });
  }
};

export const getTravel = async( req: Request, res: Response)=>{
  const {limit, offset} = req.body
  try {
    const travelQuery =  TravelModel.find({});
    travelQuery.sort('-createdAt');
    travelQuery.skip(offset).limit(limit)
    const result = await travelQuery.exec()
    res.status(200).json({result: result})
  } catch (error) {
    console.log('error to get travel data');
    res.status(400).json({messeage: 'fail to get travel info'})
    
  }
}
