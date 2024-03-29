"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routs = void 0;
const express_1 = require("express");
const routController_1 = require("../controllers/routController");
const multer_1 = __importDefault(require("../mildwares/multer"));
const Routs = (0, express_1.Router)();
exports.Routs = Routs;
Routs.get("/get", routController_1.getRout)
    .post("/create", multer_1.default.single("image"), routController_1.createRout)
    .delete("/delete", routController_1.deleteRout);
