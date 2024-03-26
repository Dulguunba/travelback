import { Router } from "express";
import { createTravel } from "../controllers/travelController";

const travelRouter = Router();
travelRouter.post("/create", createTravel);

export { travelRouter };
