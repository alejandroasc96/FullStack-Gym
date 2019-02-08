'use strict'

var express =  require('express');

var app = express();

var  api = express.Router();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));


//Puesto ALe+
// require('./app/route/user.route.js')(app);
require('./app/config/db.config.js');

// // controller
// const showUsersDataBase = (req, res) => {
//     res.status(200).send({
//         message: 'Hola Ale'
//     })
// };
// // Routes
// api.get('/users-data-base', showUsersDataBase);

require('./app/router/user.route.js')(app);
require('./app/router/news.route.js')(app);
require('./app/router/activity.route.js')(app);

// Base Route
//app.use('/api', api);
// bot server
var port = 40000;
app.listen(port, () => {
    console.log("Listening on http://localhost:" + port);
});

