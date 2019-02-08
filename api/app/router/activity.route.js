module.exports = function(app) {
    

    const activities = require('../controller/activity.controller.js');
 
    // Create a new Activity
    app.post('/api/activities', activities.create);
 
    // Retrieve all activities
    app.get('/api/activities', activities.findAll);
 
    // Retrieve a single Activity by Id
    app.get('/api/activities/:activityId', activities.findById);
 
    // Update a Activity with Id
    app.put('/api/activities/:activityId', activities.update);
 
    // Delete a Activity with Id
    app.delete('/api/activities/:ActivityId', activities.delete);
}