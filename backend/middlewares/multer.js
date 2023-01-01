const multer = require('multer');
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const route = './archivos/' + req.params.archivo
        if (!fs.existsSync(route)) {
            fs.mkdirSync(route, { recursive: true })
        }
        cb(null, route)
    },
    filename: function (req, file, cb) {
        let fecha = new Date();
        fecha = fecha.getDate() + (fecha.getMonth() + 1) + fecha.getFullYear() + '/' + fecha.getHours() + ':' + fecha.getMinutes()
        const nameFile = file.originalname + '_'+ fecha
        cb(null, nameFile)
    }
})

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype === 'image/png' || 'image/jpg' || 'image/jpg' || 'image/pdf' ) {
            console.log("El archivo es un png")
        } else {
            console.log("El archivo tiene otra extension")
        }
        cb(null, true)
    },
    limits: {
        fileSize: 1024 * 1024 * 30 //30 mb
    }
})

module.exports = upload