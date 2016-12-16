var express = require('express');
var router = express.Router();
var mysql=require('mysql')

var controladorJuegos = require('../controllers/Juegos'); 

//Get Juegos
router.get('/',controladorJuegos.getJuegos)
router.get('/:nombre',controladorJuegos.getJuegosNombre)

//Post Juegos
router.post('/',controladorJuegos.postJuegos)

//Delete Juegos
router.delete('/:nombre',controladorJuegos.deleteJuegos)

//Update Juegos
router.put('/:nombre',controladorJuegos.putJuegos)

module.exports = router;