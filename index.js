'use strict'

//archivo listened con nodemon, y por tanto de nuevo ejecutado con cada cambio..

var express = require('express');
var bodyparser = require('body-parser');
var app = express();

var port = process.env.PORT ||3000;

//app.use(bodyparser.urlencoded({extended:false}));
//app.use(bodyparser.json());



app.listen(port, function () {
    console.log(`escuchando...http://localhost:${port}/ `);
});