const unidadTransportesModels = require('../Model/unidadTransportesModels');

/*
Peticion para crear un nuevo unidadTransporte
@request {json} datos del unidadTransporte
*/

exports.createUnidadTransporte = function (request, response){
    unidadTransportesModels.add(request.body).then((unidadTransporte) => {
        response.status(200).json(unidadTransporte)
    }).catch(err => {
        response.status(500).json("No se pudo crear unidad de transporte")
    })
}


exports.getAllUnidadTransporte = function(request, response){
    unidadTransportesModels.findAll()
    .then((unidadTransporte) => {
        response.status(200)
        .json(unidadTransporte);
    }).catch(err => {
        console.log("Error")
        response.status(404)
        .json(err)
    });
}

exports.getUnidadTransporte = function(request, response){
    if(request.params.idUnidadTransporte){
        unidadTransportesModels.findById(request.params.idUnidadTransporte)
    .then((unidadTransporte) => {
        response.status(200)
        .json(unidadTransporte);
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