import express, { Request, Response } from "express";
import reqValidateBody from "../middleware/authValidate";
import authJWT from "../middleware/authJWT";
import { register, login } from "../controller/userController";
import { registerSchema, loginSchema } from "../schema/authSchema";
const router = express.Router();

router.post("/register", reqValidateBody(registerSchema), register);
router.post("/login", reqValidateBody(loginSchema), login);

export default router;
