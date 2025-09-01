import express from "express";
import authRoutes from "./routes/auth";

import cors from 'cors'
import { config } from "dotenv";
config(); // تحميل المتغيرات من .env
const app = express();
app.use(cors())
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
