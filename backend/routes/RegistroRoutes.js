const express = require('express');
const registro = require('../controllers/registroController');
const api = express.Router();

api.post('/crear', registro.CrearRegistro);
api.get('/ver', registro.getallRegistro);
api.get('/search/:id', registro.getRegistro);
api.put('/update/:id', registro.updateRegistro);
api.delete('/delete/:id', registro.deleteRegistro);

module.exports = api