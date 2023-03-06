const { signup, login } = require('../Controllers/AuthControllers');



const router = require('express').Router();

router.post('/');
router.post('/signup', signup);
router.post('/login',  login);


module.exports = router;