const modeloDB = require('./database/db')

/*Busca una unidadtransporte especifico
* @return {object} unidadtransporte 
*/

exports.findById = async function (idUnidadTransporte) {
    let unidadtransporte = await modeloDB.UnidadTransporte.findOne({
        where: {
            idUnidadtransporte: idUnidadtransporte
        }
    });

    return unidadtransporte

}

/*Busca todos los unidadtransporte*/
exports.findAll = async function () {
    let unidadtransportes = await modeloDB.UnidadTransporte.findAll();
    return unidadtransportes

}

/**
 * agrega un nuevo unidadtransporte
 */
exports.add = async function (unidadTransporte) {
    await modeloDB.UnidadTransporte.create({
        idUnidadTransporte: unidadTransporte.idUnidadTransporte,
        tipo: unidadTransporte.tipo,
        capacidadPasajeros: unidadTransporte.capacidadPasajeros,
        tipoCombustible: unidadTransporte.tipoCombustible,        
    })
}

/**
 * Elimina una unidadTransporte ya existente
 * @idUnidadTransporte id del unidadTransporte a eliminar
 */
exports.delete = async function (idUnidadTransporte) {
    await modeloDB.UnidadTransporte.destroy({
        where: {
            idUnidadTransporte: idUnidadTransporte
        }
    });
}