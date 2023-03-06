const adminControllers = require('../Controllers/admin/users.js')

const adminRouter = require('express').Router();

adminRouter.get('/users', adminControllers.userList)

module.exports = adminRouter;