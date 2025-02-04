
export class ClienteController{
    constructor(modelo){
        this.modelo=modelo;
    }

    getAll = async(req,res) =>{
        try{
            const clientes = await this.modelo.getAll();
            res.json(clientes);
        } catch (error){
            res.status(500).json({error:"Error al obtener los clientes"})
        }
    };
    getOneById = async(req,res) => {
        const id = req.params.id
        try{
            const cliente = await this.modelo.getById(id);
            if(cliente){
                res.json(cliente);
            }else{
                res.status(404).json({ error: "cliente no encontrado" });
            }
        }catch(eror){
            res.status(500).json({ error: "Error al buscar el cliente" });
        }
    }
    delete = async (req,res) => {
        const id = req.params.id
        try{
            const cliente = await this.modelo.delete(id);
            if(cliente.deletedCount > 0){
                res.json({message: "cliente eliminado correctamente"})
            }else{
                res.status(404).json({ error: "cliente no encontrado" });
            }
        }catch(eror){
            res.status(500).json({ error: "Error al eliminar el cliente" });
        }
    }
    create = async (req, res) => {
        const cliente = req.body;
       if (cliente.error) {
            return res.status(400).json({ error: "Validación de datos incorrecta" });
        }
        try {
            const nuevocliente = await this.modelo.create(cliente);
            res.status(201).json(nuevocliente);
        } catch (error) {
            res.status(500).json({ error: "Error al crear el cliente" });
        }
    };
    
    update = async (req,res) => {
        const id = req.params.id
        try{
            const clieActualizado = await this.modelo.update(id)
            if(clieActualizado){
                res.json(clieActualizado)
            }else{
                res.status(404).json({error: "User no encontrado"})
            }
        }catch (error) {
            res.status(500).json({ error: "Error al actualizar el artículo" });
        }
    }
}