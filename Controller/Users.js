import expressAsyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
// @des Register a user
// @route Post/api/users/register
// @access Public
export const registerUser = expressAsyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;
  let hashedPassword;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory ");
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error("Email already used ");
  }
  try {
    hashedPassword = await argon2.hash(password);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
  try {
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(200).json({
      message: {
        _id: newUser._id,
        email: newUser.email,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500);
    throw new Error("Error creating user");
  }
});

// @des Login a user
// @route Post/api/users/Login
// @access Public
export const loginUser = expressAsyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    res.status(404);
    throw new Error("No user found to login");
  }
  if (await argon2.verify(existingUser.password, password)) {
    // console.log("password matched");
    // res.status(200).json({ message: "password matched" });
    const accessToken = jwt.sign(
      {
        user: {
          username: existingUser.username,
          email: existingUser.email,
          id: existingUser._id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10m" }
    );
    res.status(200).json({ accessToken: accessToken });
  } else {
    res.status(401);
    throw new Error("Password incorrect");
  }
});

// @des Current  user info
// @route Post/api/users/current
// @access Private
export const currentUser = expressAsyncHandler(async (req, res, next) => {
  res.status(200).json({ message: "CurrentUser" });
});
