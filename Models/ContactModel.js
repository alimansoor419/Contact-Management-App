import mongoose from "mongoose";
const BlogSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add contact name"],
    },
    email: {
      type: String,
      required: [true, "please add Email"],
      unique: true,
    },
    number: {
      type: String,
      required: [true, "please add Phone number"],
      unique: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Contact", BlogSchema);
