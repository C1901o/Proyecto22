const express = require('express')
const api = express.Router()
const mail = require('../controllers/mailController')

api.post('/mail/send', mail)

module.exports = api