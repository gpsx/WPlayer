const db = require('../../config/db')

module.exports = {
    getInformation: async (STEAM_ID) => {
        var gameList = await db('VW_GAME_LIST').where({STEAM_ID}).orderBy('TOTAL_HOURS', 'desc')
        return {
            gameList
        }
    }
}

										