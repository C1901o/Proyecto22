const express = require('express');
const TrabajadorController = require('../controllers/TrabajadorController');
const api = express.Router();

api.post('/Trabajador', TrabajadorController.CrearTrabajador);
api.get('/BTrabajador', TrabajadorController.getTrabajador);


module.exports = api