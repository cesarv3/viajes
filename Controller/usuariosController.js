const usuariosModels = require('../Model/usuarioModels');

/*
Peticion para crear un nuevo usuario
@request {json} datos del usuario
*/

exports.createUsuario = function (request, response){
    usuariosModels.add(request.body).then((usuario) => {
        response.status(200).json(usuario)
    }).catch(err => {
        response.status(500).json("No se pudo crear Usuario")
    })
}


exports.getAllUsuarios = function(request, response){
    usuariosModels.findAll()
    .then((usuarios) => {
        response.status(200)
        .json(usuarios);
    }).catch(err => {
        console.log("Error")
        response.status(404)
        .json(err)
    });
}

exports.getUsuario = function(request, response){
    if(request.params.idUsuario){
        usuariosModels.findById(request.params.idUsuario)
    .then((usuario) => {
        response.status(200)
        .json(usuario);
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