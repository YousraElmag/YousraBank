import express from "express";
import { config } from "dotenv";
config(); //
import authRoutes from "./routes/auth";

import cors from 'cors'
const app = express();
app.use(cors())
app.use(express.json());


app.use(cors({
  origin: [
    "http://localhost:3000",               
    "https://yousra-bank.vercel.app"    
  ],
  credentials: true,
}));


app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
