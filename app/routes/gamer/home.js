const controller = require('../../controllers/home-gamer')
module.exports = function (app) {
	app.get('/gamer', async (req, res) => {
		res.redirect('/gamer/home')
	});
	app.get('/gamer/home', async (req, res) => {
		const user = req.session.user
		const top5 = controller.getTop5Games(user.PLAYER_ID)
		const twoWeeks = controller.get2WeeksGames(user.PLAYER_ID)
		const hardwareInfo = controller.getLastHardware(user.CUSTUMER_KEY)
		const recomendations = controller.getRecomendations(user.PLAYER_ID)
		res.render('gamer/home', { top5, twoWeeks, hardwareInfo, recomendations });
	});
}