const controller = require('./../controllers/authentication')

module.exports = function (app) {
	app.get('/login', async (req, res) => {
		res.render('authentication/login', { err: {} });
	});

	app.get('/register', async (req, res) => {
		res.render('authentication/register', { err: {} });
	});

	app.post('/register', async (req, res) => {
		await controller.insertCustomer(req.body)
		res.redirect('/login')
	})

	app.post('/login', async (req, res) => {
		result = await controller.authenticateLogin(req.body, req)
		if (result) {
			res.redirect('/gamer')
		}else{
			res.redirect('/login')
		}
	})
	app.get('/gamer', async (req, res) =>{
		app.render('gamer/home')
	})
}   