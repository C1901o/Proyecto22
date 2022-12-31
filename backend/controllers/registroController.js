const Registro = require ('../models/registro');

const CrearRegistro = (req, res) => {
    const { Informe,Fecha,administrador,Empresa} = req.body;

    const Registro = new Registro({
        Informe,
        Fecha,
        administrador,
        Empresa
    });
    
    Registro.save((error, Registro) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido crear el Registro" })
        }
        return res.status(201).send(Registro)
    });
}

const getallRegistro = (req,res)=>{
    Registro.find({},(error,Registro)=>{
        if(error){
            return res.status(400).send({message:"Error.."});
        }
        return res.status(200).send(Registro);
    })
}

const getRegistro = (req, res) => {
    const { id } = req.params
    Registro.findById(id, (error, Registro) => {
        if (error) {
            return res.status(400).send({ message: "Error con el Registro" })
        }
        if (!Registro) {
            return res.status(404).send({ message: "Registro inexistente" })
        }
        return res.status(200).send(Registro)
    })
}

const updateRegistro = (req, res) => {
    const { id } = req.params
    Registro.findByIdAndUpdate(id, req.body, (error, Registro) => {
        if (error) {
            return res.status(400).send({ message: "Error con el Registro" })
        }
        if (!Registro) {
            return res.status(404).send({ message: "Registro inexistente" })
        }
        return res.status(200).send({ message: "Registro modificado" })
    })
}

const deleteRegistro = (req, res) => {
    const { id } = req.params
    Registro.findByIdAndDelete(id, (error, Registro) => {
        if (error) {
            return res.status(400).send({ message: "Error con el Registro" })
        }
        if (!Registro) {
            return res.status(404).send({ message: "Registro inexistente" })
        }
        return res.status(200).send({ message: "Registro eliminado exitosamente" })
    })
}


module.exports = {
    CrearRegistro,
    getRegistro,
    getallRegistro,
    updateRegistro,
    deleteRegistro
}
