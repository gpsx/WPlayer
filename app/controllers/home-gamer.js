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
        
    },
    getRecomendations: async (STEAM_ID)=>{
        var result = await db('VW_RECOMMENDATION').where({STEAM_ID}).orderBy('TOTAL_RECOMMENDATIONS', 'desc').limit(6)

        for (const index in result) {
            result[index].MOTIVO = result[index].MOTIVO.split("-")
        }
        return result
    }
};