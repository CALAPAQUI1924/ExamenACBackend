
import mongoose from "mongoose";

const clieSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    cedula: { type: String, required: true },
    empresa: { type: String, required: true },
    tipoPersona: { type: String, required: true },

});

const ClienteM = mongoose.model("clientes", clieSchema);

export class ClienteModel {
  constructor(nombre, cedula, empresa, tipoPersona) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.empresa = empresa;
    this.tipoPersona = tipoPersona;
  }

  static async getAll() {
    return await ClienteM.find();
  }

  static async getOneById(id) {
    return await ClienteM.findById(id);
  }

  static async create(data) {
    const nuevoCliente = new ClienteM(data);
    return await nuevoCliente.save();
  }

  static async update(id, data) {
    return await ClienteM.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(id) {
    return await ClienteM.findByIdAndDelete(id);
  }
}
