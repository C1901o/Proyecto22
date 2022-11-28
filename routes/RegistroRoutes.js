const express = require('express');
const TrabajadorController = require('../controllers/registroController');
const api = express.Router();

api.post('/Registro', registroController.CrearRegistro);
api.get('/Bqregistro', registroController.getRegistro);


module.exports = api