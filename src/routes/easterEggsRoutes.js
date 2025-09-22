import express from "express"; 
import { getAllEaster, getEasterById } from "../controllers/easterEggsControllers.js";

const router = express.Router();

router.get("/", getAllEaster);
router.get("/:id", getEasterById);

export default router; 