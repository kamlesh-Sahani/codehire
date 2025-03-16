import { NextFunction, Request, Response } from "express";

type HandlerFunctionType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

const asyncHandler =
  (handlerFunction: HandlerFunctionType) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(handlerFunction(req, res, next)).catch(next);
  };
export default asyncHandler;
