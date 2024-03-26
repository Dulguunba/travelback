"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connectToDb_1 = require("./connectToDb");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const travelRoute_1 = require("./routes/travelRoute");
const calendarRoute_1 = require("./routes/calendarRoute");
const routRouters_1 = require("./routes/routRouters");
const app = (0, express_1.default)();
const PORT = 8800;
(0, connectToDb_1.connectToDb)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
//test pls
app.use("/travel", travelRoute_1.travelRouter);
app.use("/calendar", calendarRoute_1.calendarRoute);
app.use("/rout", routRouters_1.Routs);
app.get("", (req, res) => {
    res.send("Hello world");
});
app.listen(PORT, () => {
    console.log("running at http://localhost:" + PORT);
});
