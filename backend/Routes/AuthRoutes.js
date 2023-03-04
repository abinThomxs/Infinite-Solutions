const { signup, login } = require('../Controllers/AuthControllers');
const adminControllers = require('../Controllers/admin/users.js')


const router = require('express').Router();

router.post('/');
router.post('/signup', signup);
router.post('/login', login);
router.get('/admin/users', adminControllers.userList)

module.exports = router;