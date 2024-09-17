import mongoose from "mongoose";
import { mongoDB, usernameDB, passwordDB } from "./config";
export const connectDb = async () => {
  try {
    await mongoose.connect(mongoDB, {
      auth: {
        username: usernameDB,
        password: passwordDB,
      },
    });
    console.log("MongoDB connection established...");
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error connecting to MongoDB: ${error.message}`);
    } else {
      console.error("Unknown error occurred while connecting to MongoDB");
    }
  }
};
