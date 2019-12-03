const controller = require('../../controllers/profile-gamer')

module.exports = function (app) {
    app.get('/gamer/profile/', async (req, res) => {
        var information = await controller.getInformation(req.session.user.PLAYER_ID)
        var machineKey = req.session.user.MACHINE_KEY
        console.log(information);
        res.render('gamer/profile-gamer', { information, machineKey });
    });
}

var a = {
    STEAM_ID: '76561198320279811',
    GAMER_NICKNAME: 'Sarky',
    GAMER_API_NAME: 'qqissoaki',
    GAMER_NAME: 'Guilherme',
    CUSTOMER_EMAIL: 'guilherme@email.com',
    LAST_LOGOFF: '26/11/2019',
    PROFILE_STATE: 'PUBLIC',
    CREATION_DATE: '23/7/2016',
    MACHINE_KEY: 'zfbuftgwi3zsu5h',
    ACCOUNT_STATUS: 'Offline',
    CURRENT_LEVEL: 39,
    CURRENT_XP: 9674,
    REMAINING_XP: 326,
    AVATAR: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2f/2f9fb3a3dc34a5e0c6dc6ca0771e9891e70847ed_full.jpg',
    TOTAL_HOURS: 783,
    AMOUNT_GAMES: 190,
    ACCOUNT_VALUE: 2898
} 