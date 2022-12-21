const express = require('express');
const Empresa = require('../controllers/EmpresaController');
const api = express.Router();

api.post('/Empresa', Empresa.CrearEmpresa);
api.get('/BEmpresa', Empresa.getEmpresa);

module.exports = api