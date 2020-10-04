const casetaModels = require('../Model/casetaModels');

exports.createCaseta = function (request, response){
    casetaModels.add(request.body).then((caseta) => {
        response.status(200).json(caseta)
    }).catch(err => {
        response.status(500).json("No se pudo crear la caseta")
    })
}

exports.getAllCasetas = function(request, response){
    casetaModels.findAll()
    .then((casetas) => {
        response.status(200)
        .json(casetas);
    }).catch(err => {
        console.log("Error")
        response.status(404)
        .json(err)
    });
}

exports.getCaseta = function(request, response){
    if(request.params.id)
    {
        casetaModels.findById(request.params.id)
        .then((caseta) => {
            response.status(200)
            .json(caseta);
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