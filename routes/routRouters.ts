import { getRounds } from "bcrypt";
import { Router } from "express";
import { createRout, deleteRout, getRout } from "../controllers/routController";
import upload from "../mildwares/multer";

const Routs = Router();

Routs.get("/get", getRout)
  .post("/create", upload.single("image"), createRout)
  .delete("/delete", deleteRout);

export { Routs };
