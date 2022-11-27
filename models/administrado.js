const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const administradorSchema = new Schema({
    NombreCompleto: {
        type: String,
        required: true,
        minLenght: 1,
        maxLenght: 100
    },
    NumeroTelefonos: {
        type:number,
        required:true,
        mainLength:3,
        maxLength:12
    }
});

module.exports = mongoose.model('adminstrador', administradorSchema);