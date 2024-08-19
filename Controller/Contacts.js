export const GetAllContacts = async (req, res, next) => {
  res.status(200).json({ message: "hi from All contacts" });
};

export const GetOneContact = async (req, res, next) => {
  res.status(200).json({ message: `Get contact with id ${req.params.id}` });
};

export const AddContact = (req, res) => {
  const { name, email, number } = req.body;
  if (!name || !email || !number) {
    // return next(new Error("all fields are mandatory"));
    console.log("hi");
    res.status(400);
  }
  res.status(201).json({ message: "hi from Add contacts" });
};

export const UpdateContact = async (req, res, next) => {
  res
    .status(200)
    .json({ message: `hi  update contact with id ${req.params.id}` });
};

export const DeleteContact = async (req, res, next) => {
  res.status(200).json({ message: `hi  delete contact id ${req.params.id}` });
};
