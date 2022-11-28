const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();


const options = {
    useNewUrlParser: true,
    autoIndex: true,
    keepAlive: true,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4,
    useUnifiedTopology: true
}

const CrearTrabajador = require('./routes/TrabajdorRoutes');
const CrearEmpresa = require('./routes/EmpresaRoutes');
const CrearRegistro = require('./routes/RegistroRoutes');
const CrearAdmin = require('./routes/adminRoutes');

app.use(cors());
app.use(express.json());
app.options('*',cors());

//ruta
app.use('/api',CrearTrabajador);
app.use('/api', CrearEmpresa);
app.use('/api', CrearRegistro);
app.use('/api', CrearAdmin);
//config body
//..

//controladores
//...

//Comneccion a mogoodb
mongoose.connect(process.env.DB, options, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Conexion Satisfactoria..");
    }
})

//proseso de escucha en https://localhost:3000 var en .env
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})
