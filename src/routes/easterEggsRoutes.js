import express from "express"; 
import { createEasterEgg, getAllEaster, getEasterById } from "../controllers/easterEggsControllers.js";

const router = express.Router();

router.get("/", getAllEaster);
router.get("/:id", getEasterById);
router.post("/", createEasterEgg);


export default router; 