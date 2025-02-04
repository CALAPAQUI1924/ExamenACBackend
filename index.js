import express from "express";
import cors from "cors"; 
import connectDB from "./model/db.js"; 
import { ClienteModel } from "./model/ClienteModel.js";
import { enrutadorClie } from "./routers/clieRoutes.js";

const app = express();
const PORT = 3030;

app.use(cors()); 
app.use(express.json()); 

// Connect to MongoDB
connectDB();
app.use("/clientes",enrutadorClie(ClienteModel));
//app.use("/estudiantes", EnrutadorEstudiante(Estudiante));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
