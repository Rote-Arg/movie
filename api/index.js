const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const rutas = require('./src/rutas.js');
const app = express();

// middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
// ruta
app.use('/', rutas)


// puerto y callback
app.listen(5000, () => console.log('El Servidor Esta Corriendo en el Puerto 5000'))