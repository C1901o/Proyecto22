const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EmpresaSchema = new Schema({
    NombreEmp: {
        type: String,
        required: true,
        minLenght: 1,
        maxLenght: 60
    },
    Direccion: {
        type:String,
        required:true,
        mainLength:20,
        maxLength:100
    },
    Numero : {
        type:number,
        required:true,
        mainLength: 3,
        maxLength:12
    },
    Responsable: {
        type: String,
        required: true,
        mainLength: 1, 
        maxLength: 100
    }
})

module.exports = mongoose.model('Empresa', EmpresaSchema);