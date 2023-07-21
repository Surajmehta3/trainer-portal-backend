import express from "express";
import cors from "cors"
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'

import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";
import linkRouter from "./routes/linkRoute.js";
import auth from './middleware/authMiddleware.js'

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5174'); // Allow requests from any origin
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allowed HTTP methods
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers
//   next();
// });
app.options("*", cors())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/login", userRouter);
app.use("/authenticate", authRouter)
app.use("/dashboard", auth, linkRouter)

export default app;
