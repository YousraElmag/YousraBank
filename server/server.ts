import express from "express";
import { config } from "dotenv";
import authRoutes from "./routes/auth";
import cors from "cors";

config();
const app = express();

// Flexible CORS for production, preview, and localhost
const allowedOrigins = [
  "https://yousra-bank-git-main-yousraelmags-projects.vercel.app", // production
  "http://localhost:3000" // local dev
];

const corsOptions = {
  origin: (origin: string | undefined, callback: any) => {
    // allow requests with no origin (like Postman)
    if (!origin) return callback(null, true);

    // allow production + preview URLs + localhost
    if (allowedOrigins.includes(origin) || origin.endsWith(".vercel.app")) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // handle preflight

app.use(express.json());
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
