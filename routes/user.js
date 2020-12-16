const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user')

const {registerUser, loginUser} = userControllers;

router.post('/register', registerUser);
router.post('/login', loginUser);


module.exports = router;