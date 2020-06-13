var express = require('express');
var router = express.Router();
var Showapi = require('../controllers/show')

/* GET show listing. */

router.get('/all',Showapi.getAll);
router.get('/:id', Showapi.getOne);
router.post('/add', Showapi.add);
router.put('/:id',Showapi.update);
router.delete('/:id',Showapi.delete);

module.exports = router;
