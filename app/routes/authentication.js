const controller = require('./../controllers/authentication')
const arrombado = require('./../controllers/home-gamer')

module.exports = function (app) {
	app.get('/login', async (req, res) => {
		res.render('authentication/login', { err: {} });
	});

	app.get('/register', async (req, res) => {
		res.render('authentication/register', { err: {} });
	});

	app.get('/logout', (req, res) => {
		req.session.destroy();
		res.redirect('/login')
	})

	app.post('/register', async (req, res) => {
		await controller.insertCustomer(req.body)
		res.redirect('/login')
	})

	app.post('/login', async (req, res) => {
		var result = await controller.authenticateLogin(req.body, req)
		console.log(req.session.user);		
		res.redirect(result)
	})
	
}   