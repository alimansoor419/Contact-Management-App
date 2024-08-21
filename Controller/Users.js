import expressAsyncHandler from "express-async-handler";

// @des Register a user
// @route Post/api/users/register
// @access Public
export const registerUser = expressAsyncHandler(async (req, res, next) => {
  res.status(200).json({ message: "hi from registerUser" });
});

// @des Login a user
// @route Post/api/users/Login
// @access Public
export const loginUser = expressAsyncHandler(async (req, res, next) => {
  res.status(200).json({ message: "Login user" });
});

// @des Current  user info
// @route Post/api/users/current
// @access Private
export const currentUser = expressAsyncHandler(async (req, res, next) => {
  res.status(200).json({ message: "CurrentUser" });
});
