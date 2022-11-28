const Trabajador = require ('../models/registro');

const CrearRegistro = (req, res) => {
    const { Informe,administrador,empresa} = req.body;

    const Registro = new Registro({
        Informe,
        administrador,
        empresa
    });
    
    Registro.save((error, Registro) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido crear el Registro" })
        }
        return res.status(201).send(Registro)
    });
}

const getRegistro = (req,res)=>{
    Registro.find({},(error,Registro)=>{
        if(error){
            return res.status(400).send({message:"Error.."});
        }
        return res.status(200).send(Registro);
    })
}

module.exports = {
    CrearRegistro,
    getRegistro
}
