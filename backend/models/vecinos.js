const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const VecinoSchema = new Schema({
    Nombre:{
        type: String,
        required: true,
        mainLength: 1, 
        maxLength: 20
    },
    Apellido:{
        type: String,
        required: false,
        mainLength: 1, 
        maxLength: 20
    },
    Casa:{
        type: Number,
        required: true
    },
    Telefono:{
        type: Number,
        required: true,
        mainLength: 1, 
        maxLength: 13
    },
    Correo:{
        type: String,
        required: true,
        mainLength: 1, 
        maxLength: 100
    }
});

module.exports = mongoose.model('Vecinos', VecinoSchema);