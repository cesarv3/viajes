const modeloDB = require('./database/db')

/*Busca una unidadtransporte especifico
* @return {object} unidadtransporte 
*/

exports.findById = async function (id) {
    let ubicacion_ruta = await modeloDB.Ubicacion_Ruta.findOne({
        where: {
            id: id
        }
    });

    return ubicacion_ruta

}

/*Busca todos los ubicaion rutas*/
exports.findAll = async function () {
    let ubicacion_rutas = await modeloDB.Ubicacion_Ruta.findAll();
    return ubicacion_rutas

}

/**
 * agrega un nuevo unidadtransporte
 */
exports.add = async function (ubicacion_ruta) {
    await modeloDB.Ubicacion_Ruta.create({
        id: ubicacion_ruta.id,
        idRuta: ubicacion_ruta.idRuta,
        idUbicacion: ubicacion_ruta.idUbicacion       
    })
}
