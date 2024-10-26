import express from "express";

import dotenv from "dotenv";
dotenv.config();

import cors from "cors";

import cookieParser from "cookie-parser";

import connectDB from "./database/connectDB.js";

import userRouter from "./routes/userRouter.js";
import jobRouter from "./routes/jobRouter.js";
import applicationRouter from "./routes/applicationRouter.js";

// import { newsLetterCron } from "./automation/newsLetterCron.js";


const app = express();


// CORS Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URI,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


// Middleware to use the POSTMAN DATA AND TO GET THE COOKIE 
app.use(cookieParser());                                  
app.use(express.json());
app.use(express.urlencoded({ extended : true }));



app.use("/user", userRouter);
app.use("/job", jobRouter);
app.use("/application", applicationRouter);


// newsLetterCron()


await connectDB().then(()=>{
  app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
  });
});





