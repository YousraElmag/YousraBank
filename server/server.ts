// server.ts
import express from "express";
import { config } from "dotenv";
config();
import cors from "cors";
import authRoutes from "./routes/auth";
import { register, Counter, Gauge } from "prom-client";

// =========================
// Prometheus metrics setup
// =========================

// تحقق لو الميتريك موجود مسبقًا قبل إنشاء جديد
export const transferCounter =
  register.getSingleMetric("transfer_requests_total") ||
  new Counter({
    name: "transfer_requests_total",
    help: "Total number of transfer requests",
  });

export const transferFailedCounter =
  register.getSingleMetric("transfer_failed_total") ||
  new Counter({
    name: "transfer_failed_total",
    help: "Total number of failed transfers",
  });

export const transferAmountGauge =
  register.getSingleMetric("transfer_amount_current") ||
  new Gauge({
    name: "transfer_amount_current",
    help: "Amount being transferred in the current transaction",
  });

// ==========================

const app = express();
app.use(cors());
app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://yousra-bank.vercel.app"
  ],
  credentials: true,
}));

// Routes
app.use("/api/auth", authRoutes);

// Prometheus metrics endpoint
app.get("/metrics", async (req, res) => {
  try {
    res.set("Content-Type", register.contentType);
    res.end(await register.metrics());
  } catch (err) {
    res.status(500).end(err);
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
