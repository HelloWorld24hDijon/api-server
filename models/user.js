'use strict';
module.exports = (sequelize, DataTypes) => {
    var USER = sequelize.define('USER', {
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN
    }, {
        classMethods: {
            associate: function (models) {
                // Association can be define here
            }
        }
    });

    return USER;
};