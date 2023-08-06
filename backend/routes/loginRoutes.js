const express = require('express');
const router = express.Router();

const {login, signUp} = require('../controller/authenticationController');

router.route('/').post(login);
router.route('/signup').post(signUp);

module.exports = router;