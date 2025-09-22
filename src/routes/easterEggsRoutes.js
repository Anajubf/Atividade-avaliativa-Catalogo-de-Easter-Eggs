import express from "express"; 
import { createEasterEgg, deleteEasterEgg, getAllEaster, getEasterById } from "../controllers/easterEggsControllers.js";

const router = express.Router();

router.get("/", getAllEaster);
router.get("/:id", getEasterById);
router.post("/", createEasterEgg);
router.delete("/:id", deleteEasterEgg);


export default router; 