import {Router} from "express";
import {ClienteController} from "../controller/ClienteController.js";
export const enrutadorClie = (modelo)=>{
const clienteRutas = Router();
const controlador = new ClienteController(modelo);
clienteRutas.get("/",controlador.getAll);
clienteRutas.get("/:id",controlador.getOneById);
clienteRutas.post("/",controlador.create);
clienteRutas.put("/:id",controlador.update);
clienteRutas.delete("/:id",controlador.delete);
return clienteRutas;
}