const vecinos = require('../models/vecinos');

const crearvecino = (req, res) => {
    const { Nombre, Apellido, Casa, Telefono, Correo } = req.body
    const newvecinos = new vecinos({
        Nombre,
        Apellido,
        Casa,
        Telefono,
        Correo
    })
    newvecinos.save((error, vecinos) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido crear el vecino" })
        }
        return res.status(201).send(vecinos)
    })
}

const getallvecinos = (req,res)=>{
    vecinos.find({},(error,vecinos)=>{
        if(error){
            return res.status(400).send({message:"Error.."});
        }
        if(!vecinos){
            return res.status(404).send({message:"No existe vecinos en el sistema"});
        }
        return res.status(200).send(vecinos);
    })
}
/*
const getcorreos = ()=>{
    vecinos.find({},{"Correo":1,"_id":0},(error,vecinos)=>{
        if(error){
            return console.log("error")
        }
        return vecinos
    })
}*/

const getvecino = (req, res) => {
    const { id } = req.params
    vecinos.findById(id, (error, vecinos) => {
        if (error) {
            return res.status(400).send({ message: "Error intententelo mas tarde" })
        }
        if (!vecinos) {
            return res.status(404).send({ message: "No existe el vecino" })
        }
        return res.status(200).send(vecinos)
    })
}

const updatevecinos = (req, res) => {
    const { id } = req.params
    vecinos.findByIdAndUpdate(id, req.body, (error, vecinos) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo actualizar, reintente" })
        }
        if (!vecinos) {
            return res.status(404).send({ message: "No exixte, revise o creelo" })
        }
        return res.status(200).send({ message: "Datos actualizados" })
    })
}

const deletevecinos = (req, res) => {
    const { id } = req.params
    vecinos.findByIdAndDelete(id, (error, vecinos) => {
        if (error) {
            return res.status(400).send({ message: "Error al eliminar" })
        }
        if (!vecinos) {
            return res.status(404).send({ message: "No exixte, revise o creelo" })
        }
        return res.status(200).send({ message: `vecino ${vecinos.Nombre} eliminado` })
    })
}

module.exports = {
    crearvecino,
    getallvecinos,
    getvecino,
    updatevecinos,
    deletevecinos,
    getcorreos
}