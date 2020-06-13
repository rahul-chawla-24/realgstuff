var express = require('express');
var router = express.Router();
var Episodeapi = require('../controllers/episode')

/* GET Episodes listing. */

router.get('/all',Episodeapi.getAll);
router.get('/:id', Episodeapi.getOne);
router.post('/add', Episodeapi.add);
router.put('/:id',Episodeapi.update);
router.delete('/:id',Episodeapi.delete);

module.exports = router;
