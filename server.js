import express from "express";
import "dotenv/config";
import ContactRouter from "./Router/ContactsRouter.js";
import { ErrorHandler } from "./MiddleWare/ErrorHandling.js";
const app = express();
app.use(express.json());
app.use(ErrorHandler);
app.listen(process.env.PORT, () => {
  console.log("server started at port " + process.env.PORT);
  app.use("/api/contacts", ContactRouter);
});
