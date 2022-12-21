const administrado = require('../models/administrado');
const administrador = require ('../models/administrado');

const Crearadmin = (req, res) => {
    const { Nombre,Numero} = req.body;

    const admin = new administrador({
        Nombre,
        Numero
    });
    
    admin.save((error, admin) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido crear el administrador" })
        }
        return res.status(201).send(administrado)
    });
}

const getadmin = (req,res)=>{
    Trabajador.find({},(error,admin)=>{
        if(error){
            return res.status(400).send({message:"Error.."});
        }
        return res.status(200).send(administrado);
    })
}

module.exports = {
    Crearadmin,
    getadmin
}