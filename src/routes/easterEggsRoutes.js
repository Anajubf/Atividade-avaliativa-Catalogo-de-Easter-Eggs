import express from "express"; 
import { createEasterEgg, deleteEasterEgg, descobertaStutus, dificuldadeTipo, getAllEaster, getEasterById, tipoEaster, tipoMidia, } from "../controllers/easterEggsControllers.js";

const router = express.Router();

router.get("/", getAllEaster);
router.get("/:id", getEasterById);
router.get("/tipoEaster/:tipoEaster", tipoEaster);
router.get("/tipoMidia/:tipoMidia", tipoMidia);
router.get("/dificuldadeTipo/:dificuldadeTipo", dificuldadeTipo);
router.get("/descobertaStatus/:descobertaStatus", descobertaStutus);
router.post("/", createEasterEgg);
router.delete("/:id", deleteEasterEgg);
//router.put("/:id", updateEasterEgg);


export default router; 