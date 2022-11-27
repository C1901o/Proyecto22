const Trabajador = require ('../models/Trabajador');

const CrearTrabajador = (req, res) => {
    const { Nombre, Cargo, Numero} = req.body;

    const NTrabajador = new Trabajador({
        Nombre,
        Cargo,
        Numero
    });
    
    NTrabajador.save((error, Trabajador) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido crear el Trabajador" })
        }
        return res.status(201).send(Trabajador)
    });
}

const getTrabajador = (req,res)=>{
    Trabajador.find({},(error,Trabajador)=>{
        if(error){
            return res.status(400).send({message:"Error.."});
        }
        return res.status(200).send(Trabajador);
    })
}

module.exports = {
    CrearTrabajador,
    getTrabajador
}
