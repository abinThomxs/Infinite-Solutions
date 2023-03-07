const { signup, login } = require('../Controllers/AuthControllers');
const userController = require('../Controllers/user/user')



const router = require('express').Router();

router.post('/');
router.post('/signup', signup);
router.post('/login',  login);
router.post('/profile', userController.postUserData);


module.exports = router;