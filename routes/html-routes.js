module.exports = function(app){

	app.get("/", (req, res) => {
		req.db.Burger.findAll()
			.then(data => res.render("index", {burgers: data}))
			.catch(err => {
				console.log(err);
				res.sendStatus(500);
			})
	})

	app.get("/:id", (req, res) => {
		req.db.Burger.findOne({
				where: {
					id: req.params.id
				}
			})
			.then(data => res.render("single", {burger: data}))
			.catch(err => {
				console.log(err);
				res.sendStatus(500);
			})
	})
}