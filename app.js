'use strict'

//Configuración de express y punto central de la aplicación; donde se cargará el enrutador,
//que a su vez utilizará el controlador como handlers, ....

var express = require('express');
var favorito = require('./controllers/favorito');
var bodyparser = require('body-parser');

var app = express();
var api = require('./routes/favorito'); // api es donde está configurado el router (middlewares)...

//para que los middleware puedan acceder a los parametros de una forma unificada
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
//prefijo: /api . Con esto ahora será "/api" y lo que capture en el router; por ej.: /api/prueba
app.use("/api",api);


module.exports = app;




