import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import connectDB from "./config/db";
import authRoutes from './routes/authRoutes'
import { errorHandlerMiddleware } from "./middleware/errorHandler";


dotenv.config();

connectDB();

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use("../src/uploads", express.static(path.join(__dirname, "uploads")));
app.use('/api/auth', authRoutes)


app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
