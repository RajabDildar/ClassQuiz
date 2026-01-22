import { type Response, type Request } from "express";
import User from "../models/User.js";
import HashPassword from "../utils/HashPassword.js";

const addUser = async (req: Request, res: Response) => {
  let { name, email, password, role } = req.body;
  const hashedPassword = await HashPassword(password);
  const newUser = new User({ name, email, role, password: hashedPassword });
  await newUser.save();
  console.log("User added successfully!", newUser);
  res.send("User added successfully!");
};

const seeUsers = async (req: Request, res: Response) => {
  const users = await User.find();
  res.status(201).json(users);
};

export { addUser, seeUsers };
