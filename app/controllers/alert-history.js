const db = require('../../config/db')

module.exports = {
   getAlerts: async ()=>{
       var alerts= await db('APPS').where('APP_PRICE','>','100.00').limit(50)
       console.log(alerts)
       return alerts
   }

};