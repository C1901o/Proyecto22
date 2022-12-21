
//empresa subcontratada
const Empresa = require ('../models/Empresa');
const Trabajador = require ('../models/Empresa');

const CrearEmpresa = (req, res) => {
    const { NombreEmp, Direccion, Numero, Responsable} = req.body;

    const NEmpresa = new Empresa({
        NombreEmp,
        Direccion,
        Numero,
        Responsable
    });
    
    NEmpresa.save((error, Empresa) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido crear la empresa" })
        }
        return res.status(200).send(Empresa)
    });
}

const getEmpresa = (req,res)=>{
    Empresa.find({},(error,Empresa)=>{
        if(error){
            return res.status(400).send({message:"Error.."});
        }
        return res.status(200).send(Empresa);
    })
}

module.exports = {
    CrearEmpresa,
    getEmpresa
}
