import express from "express";
import "dotenv/config";
import ContactRouter from "./Router/ContactsRouter.js";
import { ErrorHandler } from "./MiddleWare/ErrorHandling.js";
import { Connectdb } from "./config/dbConnection.js";
import userRouter from "./Router/UserRouter.js";

Connectdb();
const app = express();
app.use(express.json());
app.use("/api/contacts", ContactRouter);
app.use("/api/users", userRouter);
app.use(ErrorHandler);
app.listen(process.env.PORT, () => {
  console.log("server started at port " + process.env.PORT);
});
