const db = require('../../config/db')
const { removeSomeChar } = require('../utils/index')
var dataNormalizer = (games)=>{
    for (const index in games) {
        games[index].APP_NAME = removeSomeChar(games[index].APP_NAME, "\'", "")
    }
    return games
}
module.exports = {
    get2WeeksGames: async (STEAM_ID) =>{
        var result = dataNormalizer(await db('VW_RECENTLY_ACTIVE').where({ STEAM_ID }).orderBy('WEEKS_HOURS', 'desc'))
        return result
    },
    getTop5Games: async (STEAM_ID)=>{
        var result = dataNormalizer(await db('VW_TOP_ACTIVE').where({ STEAM_ID }).limit(5).orderBy('TOTAL_HOURS', 'desc'))
        return result
    },
    getLastHardware: async (CUSTUMER_KEY)=>{
        var gameDetails = await db('VW_GAME_DETAILS').where({GAME_ID : '291550'})
        //var gameDLC = await db('VW_DLCS').where({GAME_ID : '291550'})
        console.log(gameDetails);
        
        //var result = await db('VW_TOP_ACTIVE').where({ CUSTUMER_KEY })
        //console.log(result);
        //return result
    },
    getRecomendations: async (STEAM_ID)=>{
        var result = await db('APPS').limit(6)
        for (const index in result) {
            result[index].APP_GENRES = result[index].APP_GENRES.split(" - ")
        }
        return result
    }
};