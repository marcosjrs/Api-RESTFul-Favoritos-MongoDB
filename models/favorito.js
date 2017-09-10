'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; //Schema va a representar cada uno de los documentos que va estar guardado en la BBDD

//Definimos el esquema de favorito (de cada esque se podrá obtener una clase, de la que luego se harán instancias)
var FavoritoSchema = Schema({
    title: String,
    description: String,
    url:String
});

module.exports = mongoose.model('Favorito', FavoritoSchema);//Añadimos el modelo (clase) 'Favorito' a los modelos de mongoose...

//Para ver desde consola ejecutar   use cursofavoritos  y    db.favoritos.find()    