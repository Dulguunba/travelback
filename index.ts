import express from "express";
import cors from "cors";
import { connectToDb } from "./connectToDb";
import cookieParser from "cookie-parser";
import travelRouter from "./routes/travelRoute";

const app = express();
const PORT = 8800;
connectToDb();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
//test pls
app.use("/travel", travelRouter);
// app.use("/travelcalendar", );
// app.use("/travelroute", );

app.get("", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log("running at http//:localhost:" + PORT);
});
