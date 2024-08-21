import expressAsyncHandler from "express-async-handler";
import Contact from "../Models/ContactModel.js";

export const GetAllContacts = expressAsyncHandler(async (req, res, next) => {
  let contact;
  try {
    contact = await Contact.find();
  } catch (error) {
    res.status(404).json({ message: error });
  }
  if (!contact) {
    res.status(404);
    throw new Error("No Entery Found");
  }
  res.status(200).json({ message: contact });
});

export const GetOneContact = expressAsyncHandler(async (req, res, next) => {
  console.log("in getone ");
  let contact;
  contact = await Contact.findById(req.params.id);
  if (!contact) {
    console.log("not found before throw");

    res.status(404);
    throw new Error("Not found");
  }
  res.status(200).json({ contact });
});

export const AddContact = expressAsyncHandler(async (req, res) => {
  let contact;
  const { name, email, number } = req.body;
  if ((!name, !email, !number)) {
    res.status(400);
    throw new Error("Missing required fields: name, email, or number");
  }
  try {
    contact = await Contact.create({
      name,
      email,
      number,
    });
  } catch (error) {
    console.log("error creating contact:");
  }

  res.status(201).json(contact);
});

export const UpdateContact = expressAsyncHandler(async (req, res, next) => {
  const { email, name, number } = req.body;
  let contact;
  try {
    contact = await Contact.findByIdAndUpdate(req.params.id, {
      name,
      email,
      number,
    });
  } catch (err) {
    console.log(err);
  }
  if (!contact) {
    res.status(404);
    throw new Error("No Contact found to update");
  }
  res.status(200).json({ message: contact });
});

export const DeleteContact = expressAsyncHandler(async (req, res, next) => {
  let contact;
  try {
    contact = await Contact.findByIdAndDelete(req.params.id);
  } catch (error) {
    console.log(error);
  }
  if (!contact) {
    res.status(404);
    throw new Error("No contact found to delete");
  }
  res.status(200).json({ contact });
});
