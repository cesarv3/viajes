const modeloDB = require('./database/db');

/**
 * agrega un viaje
 */
exports.add = async function (presupuesto) {
    await modeloDB.Presupuesto.create({
        idPresupuesto: presupuesto.idUbicacion,
        idUsuario: presupuesto.idUsuario,
        idUnidadTransporte: presupuesto.idUnidadTransporte,
        idRuta: presupuesto.idRuta   ,
        numPasajeros: presupuesto.numPasajeros     
    })
}

/*Busca un ubicacion especifico
* @return {object} ubicacion 
*/

exports.findById = async function (id) {
    let presupuesto = await modeloDB.Presupuesto.findOne({
        where: {
            id: id
        }
    });

    return presupuesto

}

/*Busca todos los presupuestos*/
exports.findAll = async function () {
    let presupuestos = await modeloDB.Presupuesto.findAll();
    return presupuestos

}