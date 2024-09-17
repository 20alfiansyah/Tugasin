import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "../config/config";
import User from "../models/userModel";
import bcrypt from "bcrypt";
import { sendResponse } from "../utils/responseUtils";
import jwt from "jsonwebtoken";

interface RegisterBody {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface LoginBody {
  username: string;
  password: string;
}

export const register = async (
  req: Request<{}, {}, RegisterBody>,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { username, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return sendResponse(res, {
      success: false,
      status: 400,
      message: "Passwords do not match",
    });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return sendResponse(res, {
        success: false,
        status: 409,
        message: "Email is already in use",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return sendResponse(res, {
      success: true,
      status: 201,
      message: "User successfully created",
    });
  } catch (error) {
    if (error instanceof Error) {
      return sendResponse(res, {
        success: false,
        status: 500,
        message: error.message,
      });
    }
    next();
  }
};

export const login = async (
  req: Request<{}, {}, LoginBody>,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { username, password } = req.body;
  try {
    await User.findOne({ username }).then((user) => {
      if (!user) {
        return sendResponse(res, {
          success: false,
          status: 401,
          message: "Authentication Failed",
        });
      }
      return bcrypt.compare(password, user.password).then((isMatch) => {
        if (!isMatch) {
          return sendResponse(res, {
            success: false,
            status: 401,
            message: "Authentication Failed",
          });
        }

        let jwtToken = jwt.sign(
          {
            id: user._id,
            email: user.email,
          },
          JWT_SECRET as string,
          {
            expiresIn: "1h",
          }
        );
        return sendResponse(res, {
          success: true,
          status: 200,
          message: "Authentication Successful",
          data: {
            accessToken: jwtToken,
            userID: user._id,
          },
        });
      });
    });
  } catch (error) {
    if (error instanceof Error) {
      return sendResponse(res, {
        success: false,
        status: 500,
        message: error.message,
      });
    }
  }
};
const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {};
