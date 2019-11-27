const db = require('../../config/db')
const utils = require('../utils/index')

module.exports = {
    getInformation: async (STEAM_ID) => {
        var profileGamer = await db('VW_GAMER_PROFILE').where({STEAM_ID}).first()
        profileGamer.CREATION_DATE = utils.formatDate(profileGamer.CREATION_DATE).date
        profileGamer.LAST_LOGOFF = utils.formatDate(profileGamer.LAST_LOGOFF).date
        return {
            profileGamer
        }
    }
}

