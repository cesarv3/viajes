const modeloDB = require('./database/db')

/*Busca un usuario especifico
* @return {object} usuario 
*/

exports.findById = async function (idUsuario) {
    let usuario = await modeloDB.Usuario.findOne({
        where: {
            idUsuario: idUsuario
        }
    });

    return usuario

}

/*Busca todos los usuarios*/
exports.findAll = async function () {
    let usuarios = await modeloDB.Usuario.findAll({
        attibutes: { exclude: ['password']}            
    });
    return usuarios

}

/**
 * agrega un nuevo usuario
 */
exports.add = async function (usuario) {
    await modeloDB.Usuario.create({
        idUsuario: usuario.idUsuario,
        nombre: usuario.nombre,
        apPaterno: usuario.apPaterno,
        apMaterno: usuario.apMaterno,
        username: usuario.username,
        password: usuario.password
    })
}

/**
 * Elimina un usuario ya existente
 * @idUsuario id del usuario a eliminar
 */
exports.delete = async function (idUsuario) {
    await modeloDB.Usuario.destroy({
        where: {
            idUsuario: idUsuario
        }
    });
}