import { Request, Response, NextFunction } from "express";

interface Error {
    statusCode?: number;
    message?: string;
}

export const errorHandler = (statusCode: number, message: string) => {
    const error = new Error(message) as Error;
    error.statusCode = statusCode;
    return error;
};

export const errorHandlerMiddleware = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const status = err.statusCode || 500;
    const message = err.message || "Server error";
    res.status(status).json({ error: message });
  };