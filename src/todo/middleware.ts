import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../errors/BadRequestError.js";

export async function todoMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { title } = req.body;

  if (!title) {
    throw new BadRequestError("Title is required");
  }
  next();
}
