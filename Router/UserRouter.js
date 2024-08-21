import express from "express";
import { registerUser, loginUser, currentUser } from "../Controller/Users.js";
const userRouter = express.Router();
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/current", currentUser);
export default userRouter;
