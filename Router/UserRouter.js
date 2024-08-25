import express from "express";
import { registerUser, loginUser, currentUser } from "../Controller/Users.js";
import { validateToken } from "../MiddleWare/validateToken.js";
const userRouter = express.Router();
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/current", validateToken, currentUser);
export default userRouter;
