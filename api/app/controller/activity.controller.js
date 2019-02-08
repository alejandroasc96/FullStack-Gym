const db = require('../config/db.config');
const Activity = db.activity;

console.log("activity.controller.js");

// Post a Activity
exports.create = (req, res) => {
	// Save to MySQL database
	Activity.create({
		user_id: req.body.user_id,
		name: req.body.name
	}).then(activity => {
		// Send created news to client
		res.send(activity);
	});
};

// FETCH all Activity
exports.findAll = (req, res) => {
	console.log("controller.findAllactivida");
	Activity.findAll().then(activities => {
		// Send all activity to Client
		console.log("controller.findAll");
		res.send(activities);
	});
};

// Find a activity by Id
exports.findById = (req, res) => {
	Activity.findById(req.params.activityId).then(activity => {
		res.send(activity);
	})
};

// Update a activity
exports.update = (req, res) => {
	const id = req.params.activityId;
	Activity.update({ user_id: req.body.user_id, name: req.body.name },
		{ where: { id: req.params.activityId } }
	).then(() => {
		res.status(200).send("updated successfully a activity with id = " + id);
	});
};

// Delete a activity by Id
exports.delete = (req, res) => {
	const id = req.params.activityId;
	Activity.destroy({
		where: { id: id }
	}).then(() => {
		res.status(200).send('deleted successfully a activity with id = ' + id);
	});
};