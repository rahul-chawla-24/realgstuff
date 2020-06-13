var express = require('express');
var router = express.Router();
var Genreapi = require('../controllers/genre')

/* GET Genre listing. */

router.get('/all',Genreapi.getAll);
router.get('/:id', Genreapi.getOne);
router.post('/add', Genreapi.add);
router.put('/:id',Genreapi.update);
router.delete('/:id',Genreapi.delete);

module.exports = router;
