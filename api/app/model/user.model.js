module.exports = (sequelize, Sequelize) => {
    console.log("user.model.js");

    var News = require("./news.model");

    const User = sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            autoIncremental: true,
            primaryKey: true,
            notNull: true

        },
        name: {
            type: Sequelize.STRING,
            notNull: true
        },
        gmail: {
            type: Sequelize.STRING,
            notNull: true
        },
        age: {
            type: Sequelize.INTEGER,
            notNull: true
        },
        discriminator: {
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
