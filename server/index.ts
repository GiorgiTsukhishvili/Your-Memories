import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts";

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE!.replace("<PASSWORD>", process.env.PASSWORD!);

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose
  .connect(DB)
  .then(() =>
    app.listen(PORT, () => console.log(`Connection achieved on port ${PORT}`))
  )
  .catch((err: Error) => console.log(err.message));
