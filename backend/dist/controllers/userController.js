import express, {} from "express";
import User from "../models/User.js";
const addUser = async (req, res) => {
    // let {name, email, password, role} = req.body
    const newUser = new User(req.body);
    newUser.save().then(() => {
        console.log("User added successfully!", newUser);
    });
    res.status(201).send("User added successfully!");
};
const seeUsers = async (req, res) => {
    const users = User.find();
    res.status(201).json(users);
};
export { addUser, seeUsers };
//# sourceMappingURL=userController.js.map