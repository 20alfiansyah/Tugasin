import { Response } from "express";

interface ResponseOptions {
  status: number;
  success: boolean;
  message: string;
  data?: any;
  errors?: any;
  traceId?: string;
}

export const sendResponse = (res: Response, options: ResponseOptions) => {
  const responsePayload: any = {
    status: options.status,
    success: options.success,
    message: options.message,
    ...(options.data ? { data: options.data } : {}),
    ...(options.errors ? { errors: options.errors } : {}),
    ...(options.traceId ? { traceId: options.traceId } : {}),
  };
  return res.status(options.status).json(responsePayload);
};