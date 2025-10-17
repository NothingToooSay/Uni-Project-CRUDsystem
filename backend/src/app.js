import express from "express";
import cors from "cors";
import { initDB } from "./db.js";
import entityRoutes from "./routes/entityRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/entities", entityRoutes);

const PORT = 5000;
initDB().then(() => {
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
