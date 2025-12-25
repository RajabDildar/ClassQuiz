import express, { type Response, type Request } from "express";
import cors from "cors";
let app: express.Application = express();

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// routes
app.get("/", (req: Request, res: Response): void => {
  res.status(200).send("Hello world!");
});

export default app;
