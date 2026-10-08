import express from "express";
import crypto from "crypto";

import {
  getCollection,
  addToCollection,
} from "../utils/storage.js";

const router = express.Router();

// Get all incidents
router.get("/", (req, res) => {
  const incidents = getCollection("incidents");

  res.json({
    success: true,
    incidents,
  });
});

// Create a new incident
router.post("/", (req, res) => {
  const {
    title,
    description,
    error,
    severity,
    environment,
    repository,
    branch,
  } = req.body;

  if (!title) {
    return res.status(400).json({
      error: "Incident title is required",
    });
  }

  const incident = {
    id: crypto.randomUUID(),
    title,
    description: description || "",
    error: error || "",
    severity: severity || "medium",
    environment: environment || "production",
    repository: repository || "",
    branch: branch || "main",
    status: "created",
    createdAt: new Date().toISOString(),
  };

  addToCollection("incidents", incident);

  res.status(201).json({
    success: true,
    incident,
  });
});

export default router;