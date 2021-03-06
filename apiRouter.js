// Imports
const express = require('express');
const usersCtrl = require('./routes/usersCtrl');

// Router
exports.router = (function () {
    let apiRouter = express.Router();

    //Users routes
    apiRouter.route('/users/register/').post(usersCtrl.register);
    apiRouter.route('/users/login/').post(usersCtrl.login);
    apiRouter.route('/users/profile/').get(usersCtrl.getUserProfile);
    apiRouter.route('/users/').get(usersCtrl.getUsers);
    apiRouter.route('/users/profile/').put(usersCtrl.updateUserProfile);

    return apiRouter;
})();