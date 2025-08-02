import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db/connectDB.js";
import { router } from "./routes/index.js";
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors());
app.use(router);

dotenv.config();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_CONNECTION_STRING;
connectDB(MONGODB_URI)

app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`)
})