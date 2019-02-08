const db = require('../config/db.config');
const News = db.news;

console.log("user.controller.js");

// Post a News
exports.create = (req, res) => {
	// Save to MySQL database
	News.create({
		user_id: req.body.user_id,
		title: req.body.title,
		body: req.body.body
	}).then(news => {
		// Send created news to client
		res.send(news);
	});
};

// FETCH all News
exports.findAll = (req, res) => {
	News.findAll().then(newss => {
		// Send all news to Client
		res.send(newss);
	});
};

// Find a news by Id
exports.findById = (req, res) => {
	News.findById(req.params.newsId).then(news => {
		res.send(news);
	})
};

// Update a news
exports.update = (req, res) => {
	const id = req.params.newsId;
	News.update({ user_id: req.body.user_id, title: req.body.title, body: req.body.body },
		{ where: { id: req.params.newsId } }
	).then(() => {
		res.status(200).send("updated successfully a news with id = " + id);
	});
};

// Delete a news by Id
exports.delete = (req, res) => {
	const id = req.params.newsId;
	News.destroy({
		where: { id: id }
	}).then(() => {
		res.status(200).send('deleted successfully a news with id = ' + id);
	});
};