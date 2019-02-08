'use strict'
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:@localhost:3306/db_gym');// despues de "root:" va la contraseña pero en este caso mysql no tiene ninguna.

//Comprobar si funciona la conxión 05/12/18

sequelize.authenticate()
    .then(() => {
        console.log('conectado')
    })
    .catch(err => {
        console.log('no se conceto' + err)
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.users = require('../model/user.model.js')(sequelize, Sequelize);
db.news = require('../model/news.model.js')(sequelize, Sequelize);
db.activity = require('../model/activity.model.js')(sequelize, Sequelize);

// Relaciones

//Relación => un usuario tiene muchas noticias
db.users.hasMany(db.news, {
    foreignKey: "user_id", sourceKey: "id"
});
// Relación=> una noticia solo es creado por un usuario.
db.news.belongsTo(db.users, {
    foreignKey: "user_id", targetKey: "id"
});

//Relación de muchos a muchos=>  as: 'nombre que va a tener la relación', through: 'tabla que contiene las ForenKey', foreignKey: 'nombre de la propia ForenKey'
// User.belongsToMany(Project, { as: 'Tasks', through: 'worker_tasks', foreignKey: 'userId' })
// Project.belongsToMany(User, { as: 'Workers', through: 'worker_tasks', foreignKey: 'projectId' })




module.exports = db;


