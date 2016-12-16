var express = require('express');
var router = express.Router();
var mysql=require('mysql')

var controladorCompras = require('../controllers/Compras'); 

//Get numero de compras
router.get('/:nombre',controladorCompras.getNumeroCompras)

module.exports = router;