const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.options('*',cors());

//rutas
const Trabajador = require('./routes/TrabajdorRoutes');
const Empresa = require('./routes/EmpresaRoutes');
const Registro = require('./routes/RegistroRoutes');
const Admin = require('./routes/adminRoutes');
const persona = require('./routes/vecinosRoutes');
const mail = require('./routes/mailRoutes');

//direcciones
app.use('/',Trabajador);
app.use('/', Empresa);
app.use('/registro', Registro);
app.use('/', Admin);
app.use('/',persona)
app.use('/',mail);

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//Conexion a mogoodb
mongoose.connect(process.env.DB,(error) => {
    if (error) {
        console.log("error sin db")
        console.log(error);
    } else {
        console.log("Conexion Satisfactoria BD-Mongo..");
    }
})

//proseso de escucha en http://localhost:3001 var en .env
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})
