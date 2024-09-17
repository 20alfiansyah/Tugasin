import { Request, Response, NextFunction, RequestHandler } from "express";
import { ObjectSchema } from "yup";
import { sendResponse } from "../utils/responseUtils";
type ReqValidate = (schema: ObjectSchema<any>) => RequestHandler;
const reqValidateBody: ReqValidate =
  (schema) => async (req: Request, res: Response, next: NextFunction) => {
    if (schema.fields && !Object.keys(schema.fields).length) {
      return sendResponse(res, {
        success: false,
        status: 422,
        message: "Validator Schema Empty",
      });
    }
    try {
      await schema.validate(req.body);
      console.log(await schema.validate(req.body));
      next();
    } catch (error) {
      if (error instanceof Error) {
        return sendResponse(res, {
          success: false,
          status: 422,
          message: error.message,
        });
      }
    }
  };

export default reqValidateBody;
