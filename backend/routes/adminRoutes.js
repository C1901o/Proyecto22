const express = require('express');
const adminController = require('../controllers/administradorController');
const api = express.Router();

api.post('/admin/crear', adminController.Crearadmin);
api.get('/admin/ver', adminController.getalladmin);
api.get('/admin/search/:id', adminController.getadmin);
api.put('/admin/update/:id', adminController.updateadmin);
api.delete('/admin/delete/:id', adminController.deleteadmin);
api.post('/admin/login', adminController.login);

module.exports = api