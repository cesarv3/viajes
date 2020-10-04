const ubicacionRutaModels = require('../Model/ubicacion_RutaModels');



exports.createUbicacionRuta = function (request, response){
    ubicacionRutaModels.add(request.body).then((ubicacion_Ruta) => {
        response.status(200).json(ubicacion_Ruta)
    }).catch(err => {
        response.status(500).json("No se pudo crear Usuario")
    })
}


exports.getAllUbicacionRutas = function(request, response){
    ubicacionRutaModels.findAll()
    .then((ubicacion_Rutas) => {
        response.status(200)
        .json(ubicacion_Rutas);
    }).catch(err => {
        console.log("Error")
        response.status(404)
        .json(err)
    });
}

exports.getUbicacion_Ruta = function(request, response){
    if(request.params.id){
        ubicacionRutaModels.findById(request.params.id)
    .then((ubicacion_Rutas) => {
        response.status(200)
        .json(ubicacion_Rutas);
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