const express = require('express');
const router =  express.Router();
const db = require('../mongo');

router.use('/users' , require('./users'));
router.use('/videos', require('./videos'));

module.exports = router ;