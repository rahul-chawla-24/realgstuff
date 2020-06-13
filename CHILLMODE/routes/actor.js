var express = require('express');
var router = express.Router();
var Actorapi = require('../controllers/actor')

/* GET Actors listing. */

router.get('/all',Actorapi.getAll);
router.get('/:id', Actorapi.getOne);
router.post('/add', Actorapi.add);
router.put('/:id',Actorapi.update);
router.delete('/:id',Actorapi.delete);

module.exports = router;
