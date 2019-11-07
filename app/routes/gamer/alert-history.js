const controller= require('../../controllers/alert-history')

module.exports = function (app) {
	app.get('/gamer/alerts', async (req, res) => {
       var alerts = await controller.getAlerts()
		res.render('gamer/alert-history', {alerts});
	});
}