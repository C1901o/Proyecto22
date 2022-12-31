const Trabajador = require ('../models/Trabajador');

const CrearTrabajador = (req, res) => {
    const { Nombre, Cargo, Numero,empresa} = req.body;
    console.log(req.body)
    const NTrabajador = new Trabajador({
        Nombre,
        Cargo,
        Numero,
        empresa
    })
    NTrabajador.save((error, Trabajador) => {
        if (error) {
            console.log(error)
            return res.status(400).send({ message: "No se ha podido crear el Trabajador" })
        }
        return res.status(201).send(Trabajador)
    })
}

const getallTrabajador = (req,res)=>{
    Trabajador.find({},(error,Trabajador)=>{
        if(error){
            return res.status(400).send({message:"Error vuelva a intentar"});
        }
        return res.status(200).send(Trabajador);
    })
}

const getTrabajador = (req, res) => {
    const { id } = req.params
    Trabajador.findById(id, (error, Trabajador) => {
        if (error) {
            return res.status(400).send({ message: "Error vuekva a intentar" })
        }
        if (!Trabajador) {
            return res.status(404).send({ message: "No existe el trabajador" })
        }
        return res.status(200).send(Trabajador)
    })
}

const updateTrabajador = (req, res) => {
    const { id } = req.params
    Trabajador.findByIdAndUpdate(id, req.body, (error, Trabajador) => {
        if (error) {
            return res.status(400).send({ message: "Error vuekva a intentar" })
        }
        if (!Trabajador) {
            return res.status(404).send({ message: "No existe el trabajador, no se puede actualizar" })
        }
        return res.status(200).send({ message: "Trabajador modificado" })
    })
}

const deleteTrabajador = (req, res) => {
    const { id } = req.params
    Trabajador.findByIdAndDelete(id, (error, Trabajador) => {
        if (error) {
            return res.status(400).send({ message: "Error vuekva a intentar" })
        }
        if (!Trabajador) {
            return res.status(404).send({ message: "No existe el Trabajador, no se puede eliminar" })
        }
        return res.status(200).send({ message: "Trabajador eliminado exitosamente" })
    })
}

module.exports = {
    CrearTrabajador,
    getallTrabajador,
    getTrabajador,
    updateTrabajador,
    deleteTrabajador
}
