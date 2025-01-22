import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import User from "../models/User";
import { generateToken } from "../utils/generateToken";
import { errorHandler } from "../middleware/errorHandler";

export const signUp = async (req: Request, res: Response, next : NextFunction) :Promise<void> => {
  const { name, email, password, role } = req.body;

  try {

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return next(errorHandler(400, "User already exists"));
    }


    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    next(error)
  }
};
