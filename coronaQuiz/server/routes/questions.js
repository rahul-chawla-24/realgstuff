var express = require('express');
var router = express.Router();
var Questionsapi = require('../controllers/questions')

/* GET Question listing. */

router.get('/all',Questionsapi.getAll);
router.get('/:id', Questionsapi.getOne);
router.post('/add', Questionsapi.add);
router.put('/:id', Questionsapi.update);
router.delete('/:id',Questionsapi.delete);

module.exports = router;
