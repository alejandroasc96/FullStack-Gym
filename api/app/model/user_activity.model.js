module.exports = (sequelize, Sequelize) => {
    console.log("user.model.js");

    var UserActivity = require("./news.model");

    const UserActivity = sequelize.define('user_activity', {
        user_id: {
            type: Sequelize.INTEGER,
            notNull: true

        },
        activity_id: {
            type: Sequelize.INTEGER,
            notNull: true
        }
    },{
            timestamps: false,
            tableName: 'user',
            freezeTableName: true
        
        
    });

    

return User;
}
