const db = require('../../config/db')

module.exports = {
    get2WeeksGames: async (STEAM_ID) =>{
        var result = await db('VW_RECENTLY_ACTIVE').where({ STEAM_ID })
        console.log(result);
        return result
    },
    getTop5Games: async (STEAM_ID)=>{
        var result = await db('VW_TOP_ACTIVE').where({ STEAM_ID }).limit(5).orderBy('TOTAL_HOURS', 'desc')
        console.log(result);
        return result
    },
    getLastHardware: async (CUSTUMER_KEY)=>{
        var gameDetails = await db('VW_GAME_DETAILS').where({GAME_ID : '291550'})
        var gameDLC = await db('VW_DLCS').where({GAME_ID : '291550'})
        console.log(gameDetails, gameDLC);
        
        //var result = await db('VW_TOP_ACTIVE').where({ CUSTUMER_KEY })
        //console.log(result);
        //return result
    },
    getRecomendations: async (STEAM_ID)=>{
        //var result = await db('VW_TOP_ACTIVE').where({ STEAM_ID })
        //console.log(result);
        //return result
    }
};