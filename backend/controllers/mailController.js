const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const lista = require('./vecinoscontroller')
const vecinos = require('../models/vecinos');
dotenv.config();

const sendmail = (req, res) => {
    const { message } = req.body
    const token = process.env.key
    const mail = 'notificaciones@alumnos.ubiobio.cl'
    if (!token) {
        return res.status(400).send({ message: "Error de acceso Correo" })
    }
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'cristian.onate1901@alumnos.ubiobio.cl',
            pass: token
        }
    })
    let directory = [
        
    ]
    const mailOptions = {
        from: `Notificaciones`,
        to: directory,
        subject: 'No-Responder',
        text: `${message}`
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return res.status(400).send({ message: 'Error, no se pudo enviar el correo' })
        }
        return res.status(200).send({ message: 'Mensaje enviado, Satisfactoriamente' })
    })

    transporter.verify().then(() => {
        console.log('Servidor C habilitado')
    }).catch(err => {
        console.log('Error servidor de correos')
    })
}

module.exports = sendmail