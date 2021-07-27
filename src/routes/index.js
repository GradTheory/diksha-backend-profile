import express from "express";
import authRouter from "./Auth.Router";


export const router = express.Router();

router.use("/auth", authRouter);

