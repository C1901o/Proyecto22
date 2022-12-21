const express = require('express');
const registro = require('../controllers/registroController');
const api = express.Router();

api.post('/Registro', registro.CrearRegistro);
api.get('/Bqregistro', registro.getRegistro);


module.exports = api