import express from "express";
import cors from "cors"
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'

import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
app.options("*", cors())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/login", userRouter);
app.use("/authenticate", authRouter)

export default app;
