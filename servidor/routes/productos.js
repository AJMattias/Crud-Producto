const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const cors = require('cors');

;
//api/productos
// var corsOptions = {
//     origin: 'http://localhost:4200/',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }
//const corsoptions={origin:'http://localhost:4200/', optionsSuccessStatus: 200};
router.post('/',cors(), productoController.crearProducto);
router.get('/',cors(), productoController.obtenerProductos);
router.put('/:id',cors(), productoController.actualizarProductos);
router.get('/:id',cors(), productoController.obtenerProducto);
router.delete('/:id',cors(), productoController.eliminarProducto);

module.exports = router; 