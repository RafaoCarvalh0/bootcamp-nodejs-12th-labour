import express from "express";
import ClienteController from "../controllers/clientes.controller.js"

const router = express.Router();
router.use(express.json());

router.post("/", ClienteController.createCliente);
router.get("/", ClienteController.getClientes);
router.get("/:clienteId", ClienteController.getCliente);
router.delete("/:clienteId", ClienteController.deleteCliente);
router.put("/", ClienteController.updateCliente);


export default router;