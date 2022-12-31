const express = require('express');
const Trabajador = require('../controllers/TrabajadorController');
const api = express.Router();

api.post('/Trabajador/crear', Trabajador.CrearTrabajador);
api.get('/Trabajador/ver', Trabajador.getallTrabajador);
api.get('/Trabajador/search/:id', Trabajador.getTrabajador);
api.put('/Trabajador/update/:id', Trabajador.updateTrabajador);
api.delete('/Trabajador/delete/:id', Trabajador.deleteTrabajador);

module.exports = api