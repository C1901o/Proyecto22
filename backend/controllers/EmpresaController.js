
//empresa subcontratada
const Empresa = require ('../models/Empresa');

const CrearEmpresa = (req, res) => {
    const { Nombre, Direccion, Numero, Responsable} = req.body;

    const newEmpresa = new Empresa({
        Nombre,
        Direccion,
        Numero,
        Responsable
    });
    
    newEmpresa.save((error, Empresa) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido crear la empresa" })
        }
        return res.status(200).send(Empresa)
    });
}

const getallEmpresa = (req,res)=>{
    Empresa.find({},(error,Empresa)=>{
        if(error){
            return res.status(400).send({message:"Error Vuelva a intentar"});
        }
        return res.status(200).send(Empresa);
    })
}

const getEmpresa = (req, res) => {
    const { id } = req.params
    Empresa.findById(id, (error, Empresa) => {
        if (error) {
            return res.status(400).send({ message: "Error vuelva a intentar" })
        }
        if (!Empresa) {
            return res.status(404).send({ message: "No existe la empresa" })
        }
        return res.status(200).send(Empresa)
    })
}

const updateEmpresa = (req, res) => {
    const { id } = req.params
    Empresa.findByIdAndUpdate(id, req.body, (error, Empresa) => {
        if (error) {
            return res.status(400).send({ message: "Error vuelva a intentar" })
        }
        if (!Empresa) {
            return res.status(404).send({ message: "No existe la empresa" })
        }
        return res.status(200).send({ message: "Empresa modificada" })
    })
}

const deleteEmpresa = (req, res) => {
    const { id } = req.params
    Empresa.findByIdAndDelete(id, (error, Empresa) => {
        if (error) {
            return res.status(400).send({ message: "Error vuelva a intentar" })
        }
        if (!Empresa) {
            return res.status(404).send({ message: "No existe la empresa" })
        }
        return res.status(200).send({ message: "Empresa eliminada exitosamente" })
    })
}



module.exports = {
    CrearEmpresa,
    getEmpresa,
    getallEmpresa,
    updateEmpresa,
    deleteEmpresa
}
