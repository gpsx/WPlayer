module.exports = function (app) {
	app.get('/corp', async (req, res) => {
		res.redirect('/corp/home')
    });
    app.get('/corp/home', async (req, res) => {
		res.render('corp/home', { err: {} });
    });
}