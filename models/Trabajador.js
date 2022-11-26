const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const trabajdorSchema = new Schema({
    NombreCompleto: {
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
        maxLenght: 100
    },
    Empresa: {
        type: [Schema.ObjectId],
        ref: 'Category',
    },

});

module.exports = mongoose.model('Trabajador', productSchema);