import express from "express";
import { sayHello } from "../controllers/helloController.js";
const router = express.Router();
router.route("/").get(sayHello);
export default router;
//# sourceMappingURL=helloRouter.js.map