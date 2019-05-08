const express = require('express');
const router = express.Router();


router.use('/login', require('./login'));
router.use('/users', require('./users'));
router.use('/groups', require('./groups'));


module.exports = router;
