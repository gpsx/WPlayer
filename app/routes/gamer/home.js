module.exports = function (app) {
	app.get('/gamer', async (req, res) => {
		res.redirect('/gamer/home')
	});
	app.get('/gamer/home', async (req, res) => {
		res.render('gamer/home', { err: {} });
	});
}