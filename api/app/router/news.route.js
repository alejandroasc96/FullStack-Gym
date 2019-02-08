module.exports = function(app) {
 
    console.log("news.route.js");
    

    const newss = require('../controller/news.controller.js');
 
    // Create a new News
    app.post('/api/newss', newss.create);
 
    // Retrieve all Newss
    app.get('/api/newss', newss.findAll);
 
    // Retrieve a single News by Id
    app.get('/api/newss/:newsId', newss.findById);
 
    // Update a News with Id
    app.put('/api/newss/:newsId', newss.update);
 
    // Delete a News with Id
    app.delete('/api/newss/:newsId', newss.delete);
}