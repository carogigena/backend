const express = require('express');
const routerProduc = express.Router();
const userController = require('../controller/producController');


routerProduc.get('/', userController.ObtenerTodosLosUsuarios);
routerProduc.get('/:id',userController.ObtenerUsuarioPorId);
routerProduc.post('/',userController.crearUsuario);
routerProduc.put('/:id',userController.ActualizarUsuario);
routerProduc.delete('/:id',userController.BorrarUsuario);



module.exports = routerProduc;

