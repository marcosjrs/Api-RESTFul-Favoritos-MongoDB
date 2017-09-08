'use strict'

var express = require('express');
var bodyparser = require('body-parser');
var app = express();

var port = process.env.PORT ||3000;

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


//para indicar que es opcional:  app.get("/prueba/:parametro?", ...
app.get("/prueba",function(req,resp){
    resp.status(200).send(     //"status(200).""  no es necesario
        {
            texto:"Entrando en prueba sin parametros",
            numeros:[1,2,3]
        }
    );
});

// capturaría por ejemplo:   http://localhost:3000/prueba/valor1 o  http://localhost:3000/prueba/valor1/valor2...
app.get("/prueba/:parametro/:parametroOpcional?", function (req, resp) {
    var param = req.params.parametro;
    var param2 = req.params.parametroOpcional;
    var texto = "Entrando con";
    texto += req.params.parametroOpcional ? " dos parametros: " + param + " y " + param2 : " un parametro: " + param;
    resp.send({
        texto: texto,
        numeros: [1, 2, 3]
    });
});






app.listen(port, function () {
    console.log(`escuchando...http://localhost:${port}/ `);
});