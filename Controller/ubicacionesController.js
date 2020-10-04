const ubicacionesModel = require('../Model/ubicacionModels');

exports.createUbicacion = function (request, response){
    ubicacionesModel.add(request.body).then((ubicacion) => {
        response.status(200).json(ubicacion)
    }).catch(err => {
        response.status(500).json("No se pudo crear la ubicacion")
    })
}

exports.getAllUbicaciones = function(request, response){
    ubicacionesModel.findAll()
    .then((ubicaciones) => {
        response.status(200)
        .json(ubicaciones);
    }).catch(err => {
        console.log("Error")
        response.status(404)
        .json(err)
    });
}

exports.getUbicacion = function(request, response){
    if(request.params.id){
        ubicacionesModel.findById(request.params.id)
    .then((ubicacion) => {
        response.status(200)
        .json(ubicacion);
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