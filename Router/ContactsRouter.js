import express from "express";
import {
  GetAllContacts,
  AddContact,
  UpdateContact,
  DeleteContact,
  GetOneContact,
} from "../Controller/Contacts.js";

const ContactRouter = express.Router();

// ContactRouter.get('/',AllContacts)
// both do the same job
ContactRouter.route("/").get(GetAllContacts);
ContactRouter.route("/:id").get(GetOneContact);
ContactRouter.route("/").post(AddContact);
ContactRouter.route("/:id").put(UpdateContact);
ContactRouter.route("/:id").delete(DeleteContact);
export default ContactRouter;
