const presupuestoModel = require('../Model/presupuestoModels');

exports.createPresupuesto = function (request, response){
    presupuestoModel.add(request.body).then((presupuesto) => {
        response.status(200).json(presupuesto)
    }).catch(err => {
        response.status(500).json("No se pudo crear ppto")
    })
}

exports.getAllPresupuestos = function(request, response){
    presupuestoModel.findAll()
    .then((presupuestos) => {
        response.status(200)
        .json(presupuestos);
    }).catch(err => {
        console.log("Error")
        response.status(404)
        .json(err)
    });
}

exports.getPresupuesto = function(request, response){
    if(request.params.id){
        presupuestoModel.findById(request.params.id)
    .then((presupuesto) => {
        response.status(200)
        .json(presupuesto);
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