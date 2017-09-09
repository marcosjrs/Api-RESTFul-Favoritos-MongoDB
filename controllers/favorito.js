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

module.exports = {
    prueba,
    prueba2
};