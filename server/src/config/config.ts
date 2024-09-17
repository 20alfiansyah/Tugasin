import dotenv from "dotenv";
dotenv.config();
export const port = process.env.PORT || 3000;
export const mongoDB =
  process.env.MONGO_URI ||
  "mongodb+srv://bitvader:%3Cdb_password%3E@tugasin.hfbea.mongodb.net/authDB?retryWrites=true&w=majority&appName=Tugasin";
export const usernameDB = process.env.USERNAMEDB;
export const passwordDB = process.env.PASSWORDDB;
export const JWT_SECRET = process.env.JWT_SECRET;
