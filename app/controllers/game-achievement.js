const db = require('../../config/db')

module.exports = {
    getInformation: async (GAME_ID, STEAM_ID) => {
        var complete = 0;
        var notCompleted = 0;
        var gameDetails = await db('VW_GAME_DETAILS').where({GAME_ID}).first()
        gameDetails.GENRES = gameDetails.GENRES.split('-')
        var achievements = await db('VW_ACHIEVEMENTS').where({GAME_ID}).where({STEAM_ID}).orderBy('COMPLETED', 'DESC')
        for (const achievement of achievements) {
            if (achievement.COMPLETED == 1) {
                achievement.COMPLETED = 'success'
                complete++;
            }else{
                achievement.COMPLETED = 'danger'
                notCompleted++;
            }
        }
        gameDetails.TOTAL_PERCENT_COMPLETED = Math.round(complete/(complete+notCompleted)*100)
        return {
            gameDetails,achievements
        }
    }
}