const express = require('express');
const TrabajadorController = require('../controllers/administradorController');
const api = express.Router();

api.post('/Registro', administradorController.Crearadmin);
api.get('/Bqregistro', administradorController.getadmin);


module.exports = api