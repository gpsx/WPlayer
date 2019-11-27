const controller = require('../../controllers/game-detail')

module.exports = function (app) {
	app.get('/gamer/game/detail/:GAME_ID', async (req, res) => {
        var information = await controller.getInformation(req.params.GAME_ID)
        var machineKey = req.session.user.machineKey
        console.log(information);
		res.render('gamer/game-detail', { information, machineKey });
    });
}