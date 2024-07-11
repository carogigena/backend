const express = require('express');
const routerDatos = express.Router();
const datosController = require('../controller/datosController');


routerDatos.get('/genero', datosController.ObtenerGenero);
routerDatos.get('/provincias',datosController.ObtenerProvincias);
routerDatos.get('/tipousuario',datosController.ObtenerTipoUsuario);

module.exports = routerDatos;