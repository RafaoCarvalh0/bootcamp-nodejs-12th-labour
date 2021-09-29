import express from "express";
import AutorController from "../controllers/autor.controller.js"

const router = express.Router();
router.use(express.json());

router.post("/", AutorController.createAutor);
router.get("/", AutorController.getAutores);
router.get("/:autorId", AutorController.getAutor);
router.delete("/:autorId", AutorController.deleteAutor);
router.put("/", AutorController.updateAutor);


export default router;