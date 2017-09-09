'use strict'

//Configuración de rutas. Utilizará el controlador, para 'calcular' las respuestas según requests...

var express = require('express');
var FavoritoController = require('../controllers/favorito');
var api = express.Router();


api.get("/prueba",FavoritoController.prueba);
// capturaría por ejemplo:   http://localhost:3000/prueba/valor1 o  http://localhost:3000/prueba/valor1/valor2...
//pero como en app pusimos que usara /api como si fuera un prefijo, entonces quedaría http://localhost:3000/api/prueba/valor1
api.get("/prueba/:parametro/:parametroOpcional?", FavoritoController.prueba2);

module.exports = api;


