const express = require('express');
const router = express.Router();

router.use('/history' , require('./videos/searchHistory'));
router.use('/played' , require('./videos/playedHistory'));
router.use('/bookmarked' , require('./videos/bookmarkedHistory'));

module.exports = router;

