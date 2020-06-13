var express = require('express');
var router = express.Router();
var MovieApi = require('../controllers/movie')

/* GET users listing. */

router.get('/all', MovieApi.getAll);
router.get('/:id', MovieApi.getOne);
router.post('/add', MovieApi.add);
router.put('/:id',MovieApi.update);
router.delete('/:id',MovieApi.delete);

module.exports = router;
