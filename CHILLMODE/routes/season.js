var express = require('express');
var router = express.Router();
var Seasonapi = require('../controllers/season')

/* GET Seasons listing. */

router.get('/all',Seasonapi.getAll);
router.get('/:id', Seasonapi.getOne);
router.post('/add', Seasonapi.add);
router.put('/:id',Seasonapi.update);
router.delete('/:id',Seasonapi.delete);

module.exports = router;
