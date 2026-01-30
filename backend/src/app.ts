import express, {
  type Response,
  type Request,
  type NextFunction,
} from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRouter.js";
import ExpressError from "./utils/ExpressError.js";
let app: express.Application = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "PUT", "POST", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use("/auth", authRouter);

// routes
app.get("/status", (req: Request, res: Response): void => {
  res.status(200).send("server is working fine!");
});

app.use(
  (err: ExpressError, req: Request, res: Response, next: NextFunction) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).json({ message });
  },
);

export default app;
