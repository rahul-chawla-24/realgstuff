var express = require('express');
var router = express.Router();

/* GET home page. */
var questionRouter = require('./questions');
var answerRouter = require('./answers');
var userRouter = require('./users');
 

router.use('/user', userRouter);
router.use('/answers', answerRouter);
router.use('/questions', questionRouter);


module.exports = router;
