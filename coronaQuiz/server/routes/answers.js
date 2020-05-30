var express = require('express');
var router = express.Router();
var Answerapi = require('../controllers/answers');

/* GET Answer listing. */

router.get('/all',Answerapi.getAll);
router.get('/:id', Answerapi.getOne);
router.post('/add', Answerapi.add);
router.put('/:id',Answerapi.update);
router.delete('/:id',Answerapi.delete);

module.exports = router;
