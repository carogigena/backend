const express = require('express');
const routerProduc = express.Router();
const userController = require('../controller/producController');


routerProduc.get('/', userController.ObtenerTodosLosProductos);
routerProduc.get('/:id',userController.ObtenerProductoPorId);
routerProduc.post('/',userController.crearProducto);
routerProduc.put('/:id',userController.ActualizarProducto);
routerProduc.delete('/:id',userController.BorrarProducto);



module.exports = routerProduc;

