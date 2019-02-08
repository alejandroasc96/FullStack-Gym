module.exports = (sequelize, Sequelize) => {
    console.log("news.model.js");

    const News = sequelize.define('news', {
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
        title: {
            type: Sequelize.STRING,
            notNull: true
        },
        body: {
            type: Sequelize.STRING,
            notNull: true
        }
    },
        {
            timestamps: false,
            tableName: 'news',
            freezeTableName: true


        });

    

    return News;
}