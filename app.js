const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

const router = require('./Routes/index');

app.use(cors());
app.use(router);

app.listen(port, '192.168.2.15', () => {
    console.log('Servidor escuchando por el puerto', port);
}).on('error', err => {
    console.log('Error al iniciar el servidor: ', err);
});