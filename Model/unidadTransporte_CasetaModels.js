const modeloDB = require('./database/db')

/*Busca una unidadtransporte especifico
* @return {object} unidadtransporte 
*/

exports.findById = async function (id) {
    let unidadtransporte_caseta = await modeloDB.UnidadTransporte_Caseta.findOne({
        where: {
            id: id
        }
    });

    return unidadtransporte_caseta

}

/*Busca todos los unidadtransporte*/
exports.findAll = async function () {
    let unidadtransportes_casetas = await modeloDB.UnidadTransporte_Caseta.findAll();
    return unidadtransportes_casetas

}

/**
 * agrega un nuevo unidadtransporte
 */
exports.add = async function (unidadTransporte_caseta) {
    await modeloDB.UnidadTransporte_Caseta.create({
        id: unidadTransporte_caseta.id,
        idUnidadTransporte: unidadTransporte_caseta.idUnidadTransporte,
        idCaseta: unidadTransporte_caseta.idCaseta,
        precio: unidadTransporte_caseta.precio       
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