import express from "express";
import { addUser, seeUsers } from "../controllers/userController.js";
const router = express.Router();
router.route("/").get(seeUsers).post(addUser);
export default router;
//# sourceMappingURL=userRouter.js.map