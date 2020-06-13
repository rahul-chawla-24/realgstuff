var express = require('express');
var router = express.Router();
var authApi = require('../controllers/auth')
var authCheck = require('../middleware/auth-check')
/* GET users listing. */

router.post('/create-session', authApi.createSession);
router.post('/register', authApi.signUp);
router.get('/user', authCheck ,authApi.checkAuthentication); 

module.exports = router;
