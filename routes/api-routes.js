module.exports = function(app){
	
	app.post("/", (req, res) => {
		req.db.Burger.create({
			name: req.body.name
		})
		.then(data => res.sendStatus(200))
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		})
	})

	app.put("/:id", (req, res) => {
		req.db.Burger.update({
			eaten: req.body.eaten
		},{
			where: {
				id: req.params.id
			}
		})
		.then(data => res.sendStatus(200))
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		})
	})

	app.delete("/:id", (req, res) => {
		req.db.Burger.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(data => res.sendStatus(200))
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		})
	})
}