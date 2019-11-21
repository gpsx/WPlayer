const controller = require('../../controllers/home-gamer')
module.exports = function (app) {
	app.get('/gamer', async (req, res) => {
		res.redirect('/gamer/home')
	});
	app.get('/gamer/home', async (req, res) => {
		const user = req.session.user
		const top5 = await controller.getTop5Games(user.PLAYER_ID)
		const twoWeeks = await controller.get2WeeksGames(user.PLAYER_ID)
		const hardwareInfo = await controller.getLastHardware(user.CUSTUMER_KEY)
		const recomendations = await controller.getRecomendations(user.PLAYER_ID)
		console.log(top5, twoWeeks, hardwareInfo, recomendations)
		res.render('gamer/home', { top5, twoWeeks, hardwareInfo, recomendations });
	});
}