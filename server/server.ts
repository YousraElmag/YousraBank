// server.ts (أو app.ts)
import express from "express";
import { config } from "dotenv";
import cors from "cors";
import client from "prom-client";
import authRoutes from "./routes/auth";

config(); // قراءة متغيرات البيئة

const app = express();
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});
// --- إعداد CORS ---
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// --- JSON Parsing ---
app.use(express.json());

// --- إعداد Prometheus Metrics ---
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// Counter لعدد الطلبات
const requestCounter = new client.Counter({
  name: "http_requests_total",
  help: "عدد الطلبات لكل route",
  labelNames: ["method", "route", "statusCode"],
});

// Histogram لقياس زمن الاستجابة
const responseHistogram = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "زمن الاستجابة لكل طلب بالثواني",
  labelNames: ["method", "route", "statusCode"],
  buckets: [0.1, 0.5, 1, 2, 5], // يمكنك تعديلها حسب احتياجك
});

// Middleware لتسجيل كل طلب
app.use((req, res, next) => {
  const end = responseHistogram.startTimer(); // تبدأ العد
  res.on("finish", () => {
    requestCounter.inc({
      method: req.method,
      route: req.path,
      statusCode: res.statusCode,
    });
    end({ method: req.method, route: req.path, statusCode: res.statusCode }); // توقف العد
  });
  next();
});

// --- Routes ---
app.use("/api/auth", authRoutes);

// --- Endpoint للـ metrics ---
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

// --- تشغيل السيرفر ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
