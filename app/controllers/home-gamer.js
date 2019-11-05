const db = require('../../config/db')

module.exports = {
    get2WeeksGames: async (STEAM_ID) =>{
        var result = await db('VW_RECENTLY_ACTIVE').where({ STEAM_ID })
        console.log(result);
        return result
    },
    getTop5Games: async (STEAM_ID)=>{
        var result = await db('VW_TOP5_ACTIVE').where({ STEAM_ID })
        console.log(result);
        return result
    },
    getLastHardware: async (CUSTUMER_KEY)=>{
        var result = await db('VW_TOP5_ACTIVE').where({ CUSTUMER_KEY })
        console.log(result);
        return result
    },
    getRecomendations: async (STEAM_ID)=>{
        var result = await db('VW_TOP5_ACTIVE').where({ STEAM_ID })
        console.log(result);
        return result
    },
};