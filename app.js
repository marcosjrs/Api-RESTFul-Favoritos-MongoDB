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

//Para que no tenga problemas de CORS o por temas de metodos PUT o DELETE, creamos el siguiente middleware:
app.use((req,res,next)=>{
    //para solucionar problemas que vinieran de cross domain, aceptamos peticiones de cualquier origen (se podría limitar...)
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    //metodos http que nos pueden llegar
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next(); //Al tratarse de un middleware estamos interceptando... por lo que así continuariamos la petición...
})

//prefijo: /api . Con esto ahora será "/api" y lo que capture en el router; por ej.: /api/prueba
app.use("/api",api);


module.exports = app;




