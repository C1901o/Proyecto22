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

app.use(cors());

//rutas
//...

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
