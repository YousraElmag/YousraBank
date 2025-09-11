import express from "express";
import { config } from "dotenv";
config();
import authRoutes from "./routes/auth";

import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors({
  origin: [
    "https://yousra-bank-mz2y14qc7-yousraelmags-projects.vercel.app", 
    "http://localhost:3000" 
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
