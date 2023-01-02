const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TrabajadorSchema = new Schema({
    Nombre: {
        type: String,
        required: true,
        minLenght: 1,
        maxLenght: 100
    },
    Cargo: {
        type: String,
        required: true,
        minLenght: 1,
        maxLenght: 100
    },
    Numero: {
        type: Number,
        required: true,
        minLenght: 1,
        maxLenght: 20
    },
    Empresa:{
        type: Schema.Types.ObjectId,
        ref: 'Empresa'
    }
});

module.exports = mongoose.model('Trabajador', TrabajadorSchema);