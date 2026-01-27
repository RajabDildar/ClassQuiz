import express from "express";
import { registerNewUser } from "../controllers/userController.js";
const router = express.Router();
router.route("/signup").post(registerNewUser);
export default router;
//# sourceMappingURL=authRouter.js.map