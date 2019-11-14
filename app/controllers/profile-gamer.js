const db = require('../../config/db')

module.exports = {
    getInformation: async (STEAM_ID) => {
        var profileGamer = await db('VW_GAMER_PROFILE').where({STEAM_ID}).first()
        profileGamer.CREATION_DATE = formatDate(profileGamer.CREATION_DATE)
        profileGamer.LAST_LOGOFF = formatDate(profileGamer.LAST_LOGOFF)
        return {
            profileGamer
        }
    }
}

function formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
}