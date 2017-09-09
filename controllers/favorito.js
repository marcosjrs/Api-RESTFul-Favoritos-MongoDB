'use strict'

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
    var params = req.body;//porque lo parametros para construir el favorito no llegarán por get, será un post...
    res.status(200).send({
        favorito: params
    });
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