const Administrador = require('..models/Administrador');

const checkEmail = (req, res, next) => {
const{ email } = req.headers;
    Administrador.findOne({ email }, (err,Administrador)=>{
        if(err){
            return res.status(400).send({message: 'Error de usuario'});
        }
        if(!Administrador){
            return res.status(404).send({ message: 'Usuario ya existe'});
        }
        next();
    })
}

module.exports = checkEmail;