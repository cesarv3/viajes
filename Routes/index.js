const express = require('express');
const router = express.Router();

// const apiRouters = require('../Controller/pageRouter');
const usuariosController = require('../Controller/usuariosController')
const combustiblesController = require('../Controller/combustiblesController')
const unidadtransportesController = require('../Controller/unidad_transportesController')
const casetasController = require('../Controller/casetasController')
const ubicacionesController = require('../Controller/ubicacionesController')
const ubicaciones_rutaController = require('../Controller/ubicacion_RutaController')
const rutasController = require('../Controller/rutaController')
const unidadtransporteCasetaController = require('../Controller/unidadTransporte_CasetaController')
const presupuestoController = require('../Controller/presupuestoController')
router.use(express.json());

//Rutas para la administracion de usuarios
 router.get('/api/usuarios', usuariosController.getAllUsuarios);
 router.get('/api/usuarios/:idUsuario', usuariosController.getUsuario);
 router.post('/api/usuarios', usuariosController.createUsuario);

 //Rutas para la admin de combustibles
 router.post('/api/combustibles', combustiblesController.createCombustible);
 router.get('/api/combustibles', combustiblesController.getAllCombustibles);
 router.get('/api/combustibles/:idCombustible', combustiblesController.getCombustible);

 //Rutas para la admin de Unidad de transporte
 router.post('/api/unidadtransportes', unidadtransportesController.createUnidadTransporte);
 router.get('/api/unidadtransportes', unidadtransportesController.getAllUnidadTransporte);
 router.get('/api/unidadtransportes/:idUnidadTransporte', unidadtransportesController.getUnidadTransporte);

 //Rutas para la admin de casetas
 router.post('/api/casetas', casetasController.createCaseta);
 router.get('/api/casetas', casetasController.getAllCasetas);
 router.get('/api/casetas/:id', casetasController.getCaseta);

 //Rutas para la admin de ubicaciones
 router.post('/api/ubicaciones', ubicacionesController.createUbicacion);
 router.get('/api/ubicaciones', ubicacionesController.getAllUbicaciones);
 router.get('/api/ubicaciones/:id', ubicacionesController.getUbicacion);

 //Rutas para la admin de ubicaciones_ruta
 router.post('/api/ubicacion_rutas', ubicaciones_rutaController.createUbicacionRuta);
 router.get('/api/ubicacion_rutas', ubicaciones_rutaController.getAllUbicacionRutas);
 router.get('/api/ubicacion_rutas/:id', ubicaciones_rutaController.getUbicacion_Ruta);

 //Rutas para la admin de las Rutas
 router.post('/api/rutas', rutasController.createRuta);
 router.get('/api/rutas', rutasController.getAllRutas);
 router.get('/api/rutas/:id', rutasController.getRuta);

 //Rutas para la admin de precios de las casetas
 router.post('/api/unidadtransporte_caseta', unidadtransporteCasetaController.createUnidadTransporteCaseta);
 router.get('/api/unidadtransporte_caseta', unidadtransporteCasetaController.getAllUnidadTransporteCasetas);
 router.get('/api/unidadtransporte_caseta/:id', unidadtransporteCasetaController.getUnidadTransporteCaseta);

 //Rutas para la admin de las presupuesto
 router.post('/api/presupuestos', presupuestoController.createPresupuesto);
 router.get('/api/presupuestos', presupuestoController.getAllPresupuestos);
 router.get('/api/presupuestos/:id', presupuestoController.getPresupuesto);


module.exports = router;
