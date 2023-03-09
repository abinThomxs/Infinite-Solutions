const adminUsersControllers = require('../Controllers/admin/users.js')
const adminServiceControllers = require('../Controllers/admin/services');
const adminConsultantControllers = require('../Controllers/admin/consultants');

const adminRouter = require('express').Router();

adminRouter.get('/users', adminUsersControllers.userList)
adminRouter.post('/blockUser', adminUsersControllers.blockUser);
adminRouter.post('/activateConsultant', adminUsersControllers.activateConsultant);
adminRouter.post('/addService', adminServiceControllers.addService);
adminRouter.get('/services', adminServiceControllers.servicesList);
adminRouter.get('/consultants', adminConsultantControllers.consultantsList);
adminRouter.post('/blockConsultant', adminConsultantControllers.blockConsultant);

module.exports = adminRouter;