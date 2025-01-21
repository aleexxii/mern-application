import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { IUser } from "../models/User";

interface AuthRequest extends Request {
  user?: IUser;
}

export const protect = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log("token from protect >>", token);

  if (!token) {
    return res
      .status(401)
      .json({ message: "Not authorized to access this route" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as IUser;
    console.log("decoded >>", decoded);
    next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized, token invalid" });
  }
};

export const admin = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "Access denied, admin only" });
  }
  next();
};
