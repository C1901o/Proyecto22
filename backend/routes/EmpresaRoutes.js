const express = require('express');
const Empresa = require('../controllers/EmpresaController');
const api = express.Router();

api.post('/Empresa/crear', Empresa.CrearEmpresa);
api.get('/Empresa/ver', Empresa.getallEmpresa);
api.get('/Empresa/search/:id', Empresa.getEmpresa);
api.put('/Empresa/update/:id', Empresa.updateEmpresa);
api.delete('/Empresa/delete/:id', Empresa.deleteEmpresa);

module.exports = api
