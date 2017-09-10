'use strict'
var mongoose = require('mongoose');
var app = require("./app");
var port = process.env.PORT || 3000;

//una vez se conecte la "bbdd"" de mongose arrancamos el servidor (acordarse de ejecutar antes el mongod.exe)
//el nombre de la "tabla" es cursofavoritos
mongoose.connect('mongodb://localhost:27017/cursofavoritos',(err,rest)=>{
    if(err){
        throw err;
    }else{
        console.log("Conexión mongo: OK")
        app.listen(port, function () {
            console.log(`Servidor: OK. http://localhost:${port}/ `);
        });
    }

});

