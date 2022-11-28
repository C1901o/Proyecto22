<<<<<<< HEAD
const express = require('express');
const TrabajadorController = require('../controllers/EmpresaController');
const api = express.Router();

api.post('/Empresa', TrabajadorController.CrearEmpresa);
api.get('/BEmpresa', TrabajadorController.getEmpresa);


=======
const express = require('express');
const TrabajadorController = require('../controllers/EmpresaController');
const api = express.Router();

api.post('/Empresa', TrabajadorController.CrearEmpresa);
api.get('/BEmpresa', TrabajadorController.getEmpresa);


>>>>>>> c2330f20eda7955ff6f6fa6089cd71b938b7e6e7
module.exports = api