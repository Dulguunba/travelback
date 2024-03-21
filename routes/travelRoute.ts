import { Router } from "express";
import { createTravel } from "../controllers/travelController";

const travelRouter = Router();
travelRouter.route("/create").post(createTravel);

export default travelRouter;
