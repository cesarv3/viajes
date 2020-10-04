const modeloDB = require('./database/db')

exports.findById = async function (id) {
    let ruta = await modeloDB.Ruta.findOne({
        where: {
            idRuta: id
        }
    });

    return ruta

}

/*Busca todos los usuarios*/
exports.findAll = async function () {
    let rutas = await modeloDB.Ruta.findAll();
    return rutas

}

/**
 * agrega un nuevo ruta
 */
exports.add = async function (ruta) {
    await modeloDB.Ruta.create({
        idRuta: ruta.idRuta,
        nombre: ruta.nombre,
        distancia: ruta.distancia,
        tiempo: ruta.tiempo
    })
}