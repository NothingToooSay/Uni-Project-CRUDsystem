import express from "express";
import cors from "cors";
import entityRoutes from "./routes/entityRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/entities", entityRoutes);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000");
});
