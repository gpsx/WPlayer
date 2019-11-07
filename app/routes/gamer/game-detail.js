const controller = require('../../controllers/game-detail')

module.exports = function (app) {
	app.get('/gamer/game/detail/:GAME_ID', async (req, res) => {
        await controller.getInformation(req.params.GAME_ID)
		res.render('gamer/game-detail', { err: {} });
    });
}