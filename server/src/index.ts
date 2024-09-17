import express, { Express, Request, Response, Application } from "express";
import auth from "./routes/authRoutes";
import mongoose from "mongoose";
import cors from "cors";
import { connectDb } from "./config/database";
import { port, mongoDB } from "./config/config";

const app: Application = express();
// Middleware
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/api/auth", auth);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
  connectDb();
});
