const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const registroSchema = new Schema({
    Nombre:{
        type:String,
        require: true
    },
    Encargado: {
        type: String,
        required: false
    },
    fecha:{
      type: Date,
      required: false  
    },
    Tiempo:{
        type:String,
        require:false
    },
    administrador :{
        type: String,
        require:true,
        ref :'administrado'
    },
    Empresa : {
        type: String,
        require:true,
        ref: 'Empresa'
    }
});

module.exports = mongoose.model('registro', registroSchema);