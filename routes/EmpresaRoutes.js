const express = require('express');
const TrabajadorController = require('../controllers/EmpresaController');
const api = express.Router();

api.post('/Empresa', TrabajadorController.CrearEmpresa);
api.get('/BEmpresa', TrabajadorController.getEmpresa);


module.exports = api