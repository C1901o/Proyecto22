const admin = require('../models/administrado');
const bcrypt = require('bcrypt');

const Crearadmin = (req, res) => {
    const { Nombre ,Fono,Correo} = req.body;
    console.log(req.body)

    const newadmin = new admin({
        Nombre,
        Fono,
        Correo
    });
    
    newadmin.save((error, admin) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido crear el administrador" })
        }
        return res.status(201).send(admin)
    });
}

const getalladmin = (req,res)=>{
    admin.find({},(error,admin)=>{
        if(error){
            return res.status(400).send({message:"Error Vuleva a intentar"});
        }
        return res.status(200).send(admin);
    })
}

const getadmin = (req, res) => {
    const { id } = req.params
    admin.findById(id, (error, admin) => {
        if (error) {
            return res.status(400).send({ message: "Error al encontrar el administrador" })
        }
        if (!admin) {
            return res.status(404).send({ message: "No existe el administrador" })
        }
        return res.status(200).send(admin)
    })
}

const updateadmin = (req, res) => {
    const { id } = req.params
    admin.findByIdAndUpdate(id, req.body, (error, admin) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo actualizar los datos" })
        }
        if (!admin) {
            return res.status(404).send({ message: "No existe el administrador, no se puede modificar " })
        }
        return res.status(200).send({ message: "Administrador modificado con exito" })
    })
}

const deleteadmin = (req, res) => {
    const { id } = req.params
    admin.findByIdAndDelete(id, (error, admin) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido eliminar al administrador, vuelva a intenetar" })
        }
        if (!admin) {
            return res.status(404).send({ message: "No existe el administrador, no se puede borrar" })
        }
        return res.status(200).send({ message: "Administrador eliminado con exito" })
    })
}

const login = (req, res) => {
    console.log(req.body)
    const{ email } = req.body;
        admin.findOne({ email }, (err,user)=>{
            if(err){
                return res.status(400).send({message: "Error de usuario"});
            }
            if(!admin){
                return res.status(404).send({ message: "Usuario ya existe"});
            }
            return res.status(200).send({message: "Se ha logueado", user:email,rol:"admin", password:"pass"});
        })
    }


module.exports = {
    Crearadmin,
    getadmin,
    getalladmin,
    updateadmin,
    deleteadmin,
    login
}