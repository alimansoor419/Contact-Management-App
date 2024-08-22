import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "User name is required"],
    },
    email: {
      type: String,
      unique: [true, "Already In database"],
      required: true,
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("User", UserSchema);
