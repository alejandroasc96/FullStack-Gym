module.exports = function(app) {
 
    console.log("user.route.js");
    

    const users = require('../controller/user.controller.js');
 
    // Create a new User
    app.post('/api/users', users.create);
 
    // Retrieve all Users
    app.get('/api/users', users.findAll);
 
    // Retrieve a single User by Id
    app.get('/api/users/:userId', users.findById);
 
    // Update a User with Id
    app.put('/api/users/:userId', users.update);
 
    // Delete a User with Id
    app.delete('/api/users/:userId', users.delete);
}