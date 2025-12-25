import express, {} from "express";
import cors from "cors";
let app = express();
// middlewares
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
}));
// routes
app.get("/", (req, res) => {
    res.status(200).send("Hello world!");
});
export default app;
//# sourceMappingURL=app.js.map