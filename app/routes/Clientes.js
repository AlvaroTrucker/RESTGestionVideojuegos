var express = require('express');
var router = express.Router();
var mysql=require('mysql')

var controladorClientes = require('../controllers/Clientes'); 

//Post clientes
router.post('/',controladorClientes.postClientes)

//Get clientes
router.get('/',controladorClientes.getClientes)
router.get('/:dni',controladorClientes.getClientesDni)

//Delete clientes
router.delete('/:dni',controladorClientes.deleteClientes)

//Update clientes
router.put('/:dni',controladorClientes.putClientes)

module.exports = router;