var express = require('express');
var router = express.Router();
var mysql=require('mysql')

var controladorCompras = require('../controllers/Compras'); 


//Get Compras
router.get('/',controladorCompras.getCompras)
router.get('/:dni',controladorCompras.getComprasDni)

//Post Compras
router.post('/',controladorCompras.postCompras)

//Delete Compras
router.delete('/:nombre_juego/:dni_cliente/:fecha_compra',controladorCompras.deleteCompras)

//Update Compras
router.put('/:dni_cliente/:nombre_juego/:fecha_compra',controladorCompras.putCompras)

//Get numero de Compras
router.get('/numeroCompras/:nombre',controladorCompras.getNumeroCompras)

module.exports = router;