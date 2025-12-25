import app from "./app.js";
import mongoose from "mongoose";
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
mongoose
    .connect("mongodb://127.0.0.1:27017/Examino")
    .then(() => {
    app.listen(PORT, () => {
        console.log(`app is listening at PORT ${PORT}`);
    });
})
    .catch(() => {
    console.log("Failed to connect with DB");
});
//# sourceMappingURL=index.js.map