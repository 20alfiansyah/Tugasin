import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "../config/config";
import { sendResponse } from "../utils/responseUtils";
interface CustomRequest extends Request {
  userData?: any;
}
const authJWT = (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return sendResponse(res, {
        success: false,
        status: 401,
        message: "Authentication Failed",
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET as string);
    req.userData = decoded;
    next();
  } catch (errors) {
    return sendResponse(res, {
      success: false,
      status: 401,
      message: "Authentication Failed",
    });
  }
};

export default authJWT;
