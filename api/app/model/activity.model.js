module.exports = (sequelize, Sequelize) => {
    console.log("activity.model.js");

    const Activity = sequelize.define('activity', {
        id: {
            type: Sequelize.INTEGER,
            autoIncremental: true,
            primaryKey: true,
            notNull: true

        },
        user_id: {
            type: Sequelize.INTEGER,
            notNull: true,
            underscore: true
        },
        name: {
            type: Sequelize.STRING,
            notNull: true
        }
    },{
            timestamps: false,
            tableName: 'activity',
            freezeTableName: true
        
        
    });

return Activity;
}
