const db = require('../../config/db')

module.exports = {
    getInformation: async (CUSTOMER_ID) => {
        var machines = await db('VW_CORP_MACHINES').where({CUSTOMER_ID})
        console.log(machines);
        
        return {
            machines
        }
    }
}