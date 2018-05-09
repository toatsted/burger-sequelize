const express = require("express");

let router = express.Router();

// import model burger.js
const burger = require("../models/burger.js");

// get routes
router.get("/", (req, res) => {
	burger.all()
		.then(data => res.render("index", {burgers: data}))
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		})
})

router.get("/:id", (req, res) => {
	burger.one({
			id: req.params.id
		})
		.then(data => res.render("single", data[0]))
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		})
})

// post routes
router.post("/", (req, res) => {
	burger.create("name", req.body.name)
		.then(data => res.sendStatus(200))
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		})
})

// put routes
router.put("/:id", (req, res) => {
	burger.update({
			eaten: req.body.eaten
		},{
			id: req.params.id
		})
		.then(data => res.sendStatus(200))
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		})
})

router.put("/:id/update", (req, res) => {
	burger.update({
		name: req.body.name,
		eaten: req.body.eaten
	},{
		id: req.params.id
	})
	.then(data => res.sendStatus(200))
	.catch(err => {
		console.log(err);
		res.sendStatus(500);
	})
})

// delete routes
router.delete("/:id", (req, res) => {
	burger.delete({
			id: req.params.id
		})
		.then(data => res.sendStatus(200))
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		})
})

module.exports = router;