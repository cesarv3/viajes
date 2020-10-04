const combustiblesModels = require('../Model/combustibleModels');

exports.createCombustible = function (request, response){
    combustiblesModels.add(request.body).then((combustible) => {
        response.status(200).json(combustible)
    }).catch(err => {
        response.status(500).json("No se pudo crear el combustible")
    })
}

exports.getAllCombustibles = function(request, response){
    combustiblesModels.findAll()
    .then((combustibles) => {
        response.status(200)
        .json(combustibles);
    }).catch(err => {
        console.log("Error")
        response.status(404)
        .json(err)
    });
}

exports.getCombustible = function(request, response){
    if(request.params.idCombustible){
        combustiblesModels.findById(request.params.idCombustible)
    .then((combustible) => {
        response.status(200)
        .json(combustible);
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