import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import authRoutes from "./routes/authRoutes";
require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth',authRoutes);
console.log("process.env.MONGO_URI", process.env.MONGO_URI);
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
} );