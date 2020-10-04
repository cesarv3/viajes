const modeloDB = require('./database/db');

/**
 * agrega una nueva ubicacion
 */
exports.add = async function (ubicacion) {
    await modeloDB.Ubicacion.create({
        idUbicacion: ubicacion.idUbicacion,
        nombre: ubicacion.nombre,
        idCaseta: ubicacion.idCaseta        
    })
}

/*Busca un ubicacion especifico
* @return {object} ubicacion 
*/

exports.findById = async function (idUbicacion) {
    let ubicacion = await modeloDB.Ubicacion.findOne({
        where: {
            idUbicacion: idUbicacion
        }
    });

    return ubicacion

}

/*Busca todos los ubicaciones*/
exports.findAll = async function () {
    let ubicaciones = await modeloDB.Ubicacion.findAll();
    return ubicaciones

}