const controller= require('../../controllers/alert-history')

module.exports = function (app) {
	app.get('/corp/history', async (req, res) => {
       	var information = await controller.getStates(req.session.user.CUSTOMER_ID)
		res.render('corp/alert-history', { information });
	});
}