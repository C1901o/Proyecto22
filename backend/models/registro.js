const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const registroSchema = new Schema({
    Informe: {
        type: String,
        required: true
    },
    fecha:{
      type: Date,
      required: true  
    },
    administrador :{
        type: Schema.ObjectId,
        ref :'administrado'
    },
    Empresa : {
        type: Schema.ObjectId,
        ref: 'Empresa'
    }
});

module.exports = mongoose.model('registro', registroSchema);