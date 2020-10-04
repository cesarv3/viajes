const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'viajesdb',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        define: {
            timestamps: false
        }
    }
);

const Usuario = sequelize.define('usuario', {
    idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    apPaterno: {
        type: Sequelize.STRING,
        allowNull: false
    },
    apMaterno: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }

});


const Combustible = sequelize.define('combustible', {
    idCombustible: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    precio: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});


const Caseta = sequelize.define('caseta', {
    idCaseta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Ubicacion = sequelize.define('ubicacion', {
    idUbicacion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idCaseta : {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: Caseta,
            key: 'idCaseta'
        }
    }
});

const UnidadTransporte = sequelize.define('unidadTransporte', {
    idUnidadTransporte: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    capacidadPasajeros: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tipoCombustible: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Combustible,
            key: 'idCombustible'
        }
    },
});

const Ruta = sequelize.define('ruta', {
    idRuta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    distancia:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    tiempo:{
        type: Sequelize.DOUBLE,
        allowNull: false
    }

});

const Ubicacion_Ruta = sequelize.define('ubicacion_ruta',{
    idRuta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Ruta,
            key: 'idRuta'
        }
    },
    idUbicacion:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Ubicacion,
            key: 'idUbicacion'
        }
    },
});

const UnidadTransporte_Caseta = sequelize.define('unidadTransporte_Caseta', {
    idUnidadTransporte:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: UnidadTransporte,
            key: 'idUnidadTransporte'
        }
    },
    idCaseta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Caseta,
            key: 'idCaseta'
        }
    },
    precio:{
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

const Presupuesto = sequelize.define('presupuesto',{
    idPresupuesto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'idUsuario'
        }
    },
    idUnidadTransporte:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: UnidadTransporte,
            key: 'idUnidadTransporte'
        }
    },
    idRuta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Ruta,
            key: 'idRuta'
        }
    },

    numPasajeros:{
        type: Sequelize.INTEGER,
        allowNull: false
    }


})

// create = async function(){
//     await Usuario.sync({force: true});
//     await Combustible.sync({force: true});
//     await Caseta.sync({force: true});
//     await Ubicacion.sync({force: true});
//     await UnidadTransporte.sync({force: true});    
//     await Ruta.sync({force: true});
//     await UnidadTransporte_Caseta.sync({force:true});
//     await Ubicacion_Ruta.sync({force:true});
//     await Presupuesto.sync({force: true});
    
// }

// create();


exports.Usuario = Usuario;
exports.Combustible = Combustible;
exports.Caseta = Caseta;
exports.Ubicacion = Ubicacion;
exports.UnidadTransporte = UnidadTransporte;
exports.Ruta = Ruta;
exports.Presupuesto = Presupuesto;
exports.UnidadTransporte_Caseta = UnidadTransporte_Caseta;
exports.Ubicacion_Ruta = Ubicacion_Ruta;

