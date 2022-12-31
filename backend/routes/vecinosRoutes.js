const express = require('express');
const vecinosController = require('../controllers/vecinoscontroller');
const api = express.Router();

api.post('/crear',vecinosController.crearvecino );
api.get('/ver', vecinosController.getallvecinos);
api.put('/update/:id', vecinosController.updatevecinos);
api.delete('/delete/:id', vecinosController.deletevecinos);
api.get('/search/:id', vecinosController.getvecino);

module.exports = api