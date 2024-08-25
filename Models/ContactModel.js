import mongoose from "mongoose";
const BlogSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
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
