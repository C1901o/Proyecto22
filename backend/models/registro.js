const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const registroSchema = new Schema({
    Informe: {
        type: Buffer,
        required: true
    },
    fecha:{
      type: Date,
      required: true  
    },
    administrador :{
        type: Schema.Types.ObjectId,
        ref :'administrador'
    },
    Empresa : {
        type: Schema.Types.ObjectId,
        ref: 'empresa'
    }
});

module.exports = mongoose.model('registro', registroSchema);