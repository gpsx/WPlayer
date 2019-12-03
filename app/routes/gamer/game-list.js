const controller = require('../../controllers/game-list')

module.exports = function (app) {
	app.get('/gamer/game/list/', async (req, res) => {
        var information = await controller.getInformation(req.session.user.PLAYER_ID)
        var machineKey = req.session.user.MACHINE_KEY
        console.log(information);
        res.render('gamer/game-list', { information, machineKey });
    });
}