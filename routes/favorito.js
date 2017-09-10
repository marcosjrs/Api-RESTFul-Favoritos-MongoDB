'use strict'

//Configuración de rutas. Utilizará el controlador, para 'calcular' las respuestas según requests...

var express = require('express');
var FavoritoController = require('../controllers/favorito');
var api = express.Router();


api.get("/prueba",FavoritoController.prueba);
api.get("/prueba/:parametro/:parametroOpcional?", FavoritoController.prueba2);
//Rutas para Crear, leer, modificar y borrar de Favorito
api.get("/favoritos/",FavoritoController.getFavoritos);
api.get("/favorito/:id",FavoritoController.getFavorito);
api.post("/favorito/",FavoritoController.saveFavorito);
api.put("/favorito/:id",FavoritoController.updateFavorito);
api.delete("/favorito/:id",FavoritoController.deleteFavorito);

module.exports = api;


