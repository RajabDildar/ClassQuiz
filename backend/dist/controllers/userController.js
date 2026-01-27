import {} from "express";
import User from "../models/User.js";
import Hash from "../utils/Hash.js";
import { UserSchema } from "../schemas/userSchema.js";
const registerNewUser = async (req, res) => {
    let { error } = UserSchema.validate(req.body);
    if (error) {
        res.send("Invalid data");
        return;
    }
    let { name, email, password, role } = req.body;
    const hashedPassword = await Hash(password);
    const newUser = new User({ name, email, role, password: hashedPassword });
    await newUser.save();
    console.log("User added successfully!", newUser);
    res.send("User added successfully!");
};
export { registerNewUser };
//# sourceMappingURL=userController.js.map