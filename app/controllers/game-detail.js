const db = require('../../config/db')

module.exports = {
    getInformation: async (GAME_ID) => {
        var gameDetails = await db('VW_GAME_DETAILS').where({GAME_ID}).first()
        console.log(gameDetails);
        
        gameDetails.PLATFORMS = gameDetails.PLATFORMS.split(' ')
        gameDetails.GENRES = gameDetails.GENRES.split('-')

        for (const index in gameDetails.PLATFORMS) {
            if (gameDetails.PLATFORMS[index] == 'mac') {
                gameDetails.PLATFORMS[index] = 'apple'
                break
            }
        }
        var gameDLC = await db('VW_DLCS').where({GAME_ID})
        console.log(gameDetails)
        return {
            gameDetails,gameDLC
        }
    }
}