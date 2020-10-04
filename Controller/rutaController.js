const rutasModels = require('../Model/rutaModels');

/*
Peticion para crear un nuevo usuario
@request {json} datos del usuario
*/

exports.createRuta = function (request, response){
    rutasModels.add(request.body).then((ruta) => {
        response.status(200).json(ruta)
    }).catch(err => {
        response.status(500).json("No se pudo crear Ruta")
    })
}


exports.getAllRutas = function(request, response){
    rutasModels.findAll()
    .then((rutas) => {
        response.status(200)
        .json(rutas);
    }).catch(err => {
        console.log("Error")
        response.status(404)
        .json(err)
    });
}

exports.getRuta = function(request, response){
    if(request.params.id){
        rutasModels.findById(request.params.id)
    .then((ruta) => {
        response.status(200)
        .json(ruta);
    }).catch(err => {
        console.log("Error")
        response.status(404)
        .json(err)
    });

    } else {
        response.status(400)
            .json({
                msj: "Ingrese el ID"
            });
    }
    
}