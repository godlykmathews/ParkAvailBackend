const express = require('express');
const { signInAdmin } = require('../controllers/adminController');
const router = express.Router();


router.post('/signin', signInAdmin);

module.exports = router;
