
import "dotenv/config";
import express from "express";
import cors from "cors";
import incidentRoutes from "./routes/incidents.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

// Test backend
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "RootLens backend is working"
  });
});

// Incidnent API
app.use("/api/incidents", incidentRoutes);

app.listen(PORT, () => {
  console.log(
    `RootLens backend running on http://localhost:${PORT}`
  );
});
