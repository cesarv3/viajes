const modeloDB = require('./database/db');

/**
 * agrega un nuevo combustible
 */
exports.add = async function (combustible) {
    await modeloDB.Combustible.create({
        idCombustible: combustible.idCombustible,
        nombre: combustible.nombre,
        precio: combustible.precio
        
    })
}

/*Busca un combustible especifico
* @return {object} combustible 
*/

exports.findById = async function (idCombustible) {
    let combustible = await modeloDB.Combustible.findOne({
        where: {
            idCombustible: idCombustible
        }
    });

    return combustible

}

/*Busca todos los combustibles*/
exports.findAll = async function () {
    let combustibles = await modeloDB.Combustible.findAll();
    return combustibles

}