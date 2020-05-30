var express = require('express');
var router = express.Router();
var Userapi = require('../controllers/user')

/* GET User listing. */

router.get('/all',Userapi.getAll);
router.get('/:id', Userapi.getOne);
router.post('/add', Userapi.add);
router.put('/:id',Userapi.update);
router.delete('/:id',Userapi.delete);

module.exports = router;
