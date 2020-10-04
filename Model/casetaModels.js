const modeloDB = require('./database/db');

/**
 * agrega una nueva caseta
 */
exports.add = async function (caseta) {
    await modeloDB.Caseta.create({
        idCaseta: caseta.idCaseta,
        nombre: caseta.nombre    
        
    })
}

/*Busca un caseta especifico
* @return {object} caseta 
*/
exports.findById = async function (idCaseta) {
    let caseta = await modeloDB.Caseta.findOne({
        where: {
            idCaseta: idCaseta
        }
    });

    return caseta

}

/*Busca todos los casetas*/
exports.findAll = async function () {
    let casetas = await modeloDB.Caseta.findAll();
    return casetas

}