const express = require('express');
const vecinosController = require('../controllers/vecinoscontroller');
const api = express.Router();

api.post('/vecinos/crear',vecinosController.crearvecino );
api.get('/vecinos/ver', vecinosController.getallvecinos);
api.get('/vecinos/search/:id', vecinosController.getvecino);
api.put('/vecinos/update/:id', vecinosController.updatevecinos);
api.delete('/vecinos/delete/:id', vecinosController.deletevecinos);

module.exports = api