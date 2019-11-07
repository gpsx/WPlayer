const db = require('../../config/db')

module.exports = {
    getInformation: async (GAME_ID) => {
        var gameDetails = await db('VW_GAME_DETAILS').where({GAME_ID})
        var gameDLC = await db('VW_DLCS').where({GAME_ID})
        console.log(gameDetails, gameDLC)
    }
}