"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferAmountGauge = exports.transferFailedCounter = exports.transferCounter = void 0;
// server.ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./routes/auth"));
const prom_client_1 = require("prom-client");
// =========================
// Prometheus metrics setup
// =========================
// تحقق لو الميتريك موجود مسبقًا قبل إنشاء جديد
exports.transferCounter = prom_client_1.register.getSingleMetric("transfer_requests_total") ||
    new prom_client_1.Counter({
        name: "transfer_requests_total",
        help: "Total number of transfer requests",
    });
exports.transferFailedCounter = prom_client_1.register.getSingleMetric("transfer_failed_total") ||
    new prom_client_1.Counter({
        name: "transfer_failed_total",
        help: "Total number of failed transfers",
    });
exports.transferAmountGauge = prom_client_1.register.getSingleMetric("transfer_amount_current") ||
    new prom_client_1.Gauge({
        name: "transfer_amount_current",
        help: "Amount being transferred in the current transaction",
    });
// ==========================
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "https://yousra-bank.vercel.app"
    ],
    credentials: true,
}));
// Routes
app.use("/api/auth", auth_1.default);
// Prometheus metrics endpoint
app.get("/metrics", async (req, res) => {
    try {
        res.set("Content-Type", prom_client_1.register.contentType);
        res.end(await prom_client_1.register.metrics());
    }
    catch (err) {
        res.status(500).end(err);
    }
});
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Backend running on http://localhost:${PORT}`);
});
