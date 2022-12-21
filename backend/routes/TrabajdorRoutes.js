const express = require('express');
const Trabajador = require('../controllers/TrabajadorController');
const api = express.Router();

api.post('/Trabajador', Trabajador.CrearTrabajador);
api.get('/BTrabajador', Trabajador.getTrabajador);


module.exports = api