const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const adminSchema = new Schema({
    Nombre: {
        type: String,
        required: true,
        minLenght: 1,
        maxLenght: 100
    },
    Fono: {
        type: Number,
        required:true
    }
});

module.exports = mongoose.model('adminstrador', adminSchema);