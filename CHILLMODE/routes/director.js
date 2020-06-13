var express = require('express');
var router = express.Router();
var Directorapi = require('../controllers/director')

/* GET Directos listing. */

router.get('/all',Directorapi.getAll);
router.get('/:id', Directorapi.getOne);
router.post('/add', Directorapi.add);
router.put('/:id',Directorapi.update);
router.delete('/:id',Directorapi.delete);

module.exports = router;
