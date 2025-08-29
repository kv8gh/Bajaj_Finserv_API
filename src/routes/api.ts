import express from "express";
import { handleApiRequest } from "../controller/apiController.js";

const router = express.Router();

// POST /bfhl
router.post("/", handleApiRequest);

export default router;
