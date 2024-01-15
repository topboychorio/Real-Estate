import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      match: /^[a-zA-Z0-9]*$/, // Only allow letters and numbers
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      // match: /^[a-zA-Z0-9]*$/, // Only allow letters and numbers
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
