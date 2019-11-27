const controller = require('../../controllers/profile-gamer')

module.exports = function (app) {
	app.get('/gamer/profile/', async (req, res) => {
        var information = await controller.getInformation(req.session.user.PLAYER_ID)
        console.log(information);
        res.render('gamer/profile-gamer', { information });
    });
}