const express = require('express');
const administrador = require('../controllers/administradorController');
const api = express.Router();

api.post('/Registro', administrador.Crearadmin);
api.get('/Bqregistro', administrador.getadmin);


module.exports = api