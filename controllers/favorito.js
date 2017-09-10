'use strict'

var Favorito = require("../models/favorito")

//Controlador de favoritos. Utilizado por el enrutador como controlador de respuesta...

function prueba (req, resp) {
    resp.status(200).send(     //"status(200).""  no es necesario
        {
            texto: "Entrando en prueba sin parametros",
            numeros: [1, 2, 3]
        }
    );
}

function prueba2  (req, resp) {
    var param = req.params.parametro;
    var param2 = req.params.parametroOpcional;
    var texto = "Entrando con";
    texto += req.params.parametroOpcional ? " dos parametros: " + param + " y " + param2 : " un parametro: " + param;
    resp.send({
        texto: texto,
        numeros: [1, 2, 3]
    });
}

//Crear, leer, modificar y borrar de Favorito

function getFavorito(req, res){
    var favoritoId = req.params.id;
    res.status(200).send({
        favorito: "datos de favorito...."
    });
}

function saveFavorito(req, res){
    var favorito = new Favorito();//Clase creada en models, mediante un esquema de moongose en /models/favorito.js    
    
    var params = req.body;//Del body por venir de un post...
    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url = params.url;   

    favorito.save(function(err,objGuardado){ 
        if(err){
            res.status(500).send({ message: "Error al guardar el favorito."  });
        }else{
            res.status(200).send({  favorito: objGuardado });
        }
    }); 
    //Para ver desde consola ejecutar   use cursofavoritos  y    db.favoritos.find()    
}
function updateFavorito(req, res){
    var params = req.body;
    res.status(200).send({
        favorito: params
    });
}
function deleteFavorito(req, res){
    var params = req.body;
    res.status(200).send({
        favorito: params
    });
}

module.exports = {
    prueba,
    prueba2,
    getFavorito,
    saveFavorito,
    updateFavorito,
    deleteFavorito
};