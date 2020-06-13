var express = require('express');
var router = express.Router();

/* GET home page. */
var authRouter = require('./auth');
var movieRouter = require('./movie');
var episodeRouter = require('./episode');
var showRouter = require('./show');
var seasonRouter = require('./season');
var genreRouter = require('./genre');
var directorRouter = require('./director');
var actorRouter = require('./actor');
 

router.use('/auth', authRouter);
router.use('/movie', movieRouter);
router.use('/episode', episodeRouter);
router.use('/show', showRouter);
router.use('/season', seasonRouter);
router.use('/movie', genreRouter);
router.use('/director',directorRouter);
router.use('/actor',actorRouter);
router.use('/genre',genreRouter);




module.exports = router;
