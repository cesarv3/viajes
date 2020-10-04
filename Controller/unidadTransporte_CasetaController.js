const unidadTransporteCasetaModels = require('../Model/unidadTransporte_CasetaModels');

exports.createUnidadTransporteCaseta = function (request, response){
    unidadTransporteCasetaModels.add(request.body).then((unidadTransporteCaseta) => {
        response.status(200).json(unidadTransporteCaseta)
    }).catch(err => {
        response.status(500).json("No se pudo crear")
    })
}


exports.getAllUnidadTransporteCasetas = function(request, response){
    unidadTransporteCasetaModels.findAll()
    .then((unidadTransporteCasetas) => {
        response.status(200)
        .json(unidadTransporteCasetas);
    }).catch(err => {
        console.log("Error")
        response.status(404)
        .json(err)
    });
}

exports.getUnidadTransporteCaseta = function(request, response){
    if(request.params.id){
        unidadTransporteCasetaModels.findById(request.params.id)
    .then((unidadTransporteCaseta) => {
        response.status(200)
        .json(unidadTransporteCaseta);
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