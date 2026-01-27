import express, {
  type Response,
  type Request,
  type NextFunction,
} from "express";
import cors from "cors";
import authRouter from "./routes/authRouter.js";
import ExpressError from "./utils/ExpressError.js";
let app: express.Application = express();

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
app.get("/", (req: Request, res: Response): void => {
  res.status(200).send("This is home.");
});

app.use(
  (err: ExpressError, req: Request, res: Response, next: NextFunction) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).send(`Some error occured: ${message}`);
  },
);

export default app;
