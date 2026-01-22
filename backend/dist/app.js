import express, {} from "express";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
let app = express();
// middlewares
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "PUT", "POST", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type"],
}));
app.use("/user", userRouter);
// routes
app.get("/", (req, res) => {
    res.status(200).send("This is home.");
});
export default app;
//# sourceMappingURL=app.js.map