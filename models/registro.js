const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const registroSchema = new Schema({
    Informe: {
        type: String,
        required: true,
        minLenght: 1,
        maxLenght: 100
    },
});

module.exports = mongoose.model('registro', registroSchema);