const controller = require('../../controllers/game-achievement')

module.exports = function (app) {
	app.get('/gamer/game/achievement/:GAME_ID', async (req, res) => {
        var information = await controller.getInformation(req.params.GAME_ID, req.session.user.PLAYER_ID)
        var machineKey = req.session.user.machineKey
        console.log(information);
        res.render('gamer/game-achievement', { information, machineKey });
    });
}