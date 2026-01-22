import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "teacher"],
      required: true,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
