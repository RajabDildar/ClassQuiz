import express, {} from "express";
import cors from "cors";
import authRouter from "./routes/authRouter.js";
let app = express();
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "PUT", "POST", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type"],
  }),
); */
app.use(cors());
app.use("/auth", authRouter);
// routes
app.get("/", (req, res) => {
    res.status(200).send("This is home.");
});
export default app;
//# sourceMappingURL=app.js.map