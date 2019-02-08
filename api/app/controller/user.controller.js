const db = require('../config/db.config');
const User = db.users;

console.log("user.controller.js");

// Post a User
exports.create = (req, res) => {
	// Save to MySQL database
	User.create({
		name: req.body.name,
		gmail: req.body.gmail,
		age: req.body.age,
		discriminator: req.body.discriminator
	}).then(user => {
		// Send created user to client
		res.send(user);
	});
};

// FETCH all Users
exports.findAll = (req, res) => {
	console.log("controller.findAll por fuera");
	User.findAll().then(users => {
		// Send all users to Client
		console.log("controller.findAll");
		res.send(users);
	});
};

// Find a User by Id
exports.findById = (req, res) => {
	User.findById(req.params.userId).then(user => {
		res.send(user);
	})
};

// Update a User
exports.update = (req, res) => {
	const id = req.params.userId;
	User.update({ name: req.body.name, gmail: req.body.gmail, age: req.body.age, discriminator: req.body.discriminator },
		{ where: { id: req.params.userId } }
	).then(() => {
		res.status(200).send("updated successfully a user with id = " + id);
	});
};

// Delete a User by Id
exports.delete = (req, res) => {
	const id = req.params.userId;
	User.destroy({
		where: { id: id }
	}).then(() => {
		res.status(200).send('deleted successfully a user with id = ' + id);
	});
};