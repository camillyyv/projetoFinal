const express = require('express');
const eventoController = require('../Controllers/eventoController');
const router = express.Router();
 
// Rotas de CRUD para eventos
router.post('/', eventoController.createEvento);
router.get('/', eventoController.getEventos);
router.put('/:id', eventoController.updateEvento);
router.delete('/:id', eventoController.deleteEvento);
 
module.exports = router