const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const empSchema = new Schema({
    Nombre: {
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
    Numero: {
        type: Number,
        required:true
    },
    Responsable: {
        type: String,
        required: true,
        mainLength: 1, 
        maxLength: 60
    }
})

module.exports = mongoose.model('emp', empSchema);