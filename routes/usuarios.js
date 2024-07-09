const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');


router.get('/', userController.obtenerTodosLosUsuarios);
router.get('/:id',userController.obtenerUsuarioPorId);
router.post('/',userController.crearUsuario);
router.put('/:id',userController.actualizarUsuario);
router.delete('/:id',userController.borrarUsuario);
// Ruta para iniciar sesión de un usuario
router.post('/login', userController.login);



module.exports = router;

