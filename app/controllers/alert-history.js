const db = require('../../config/db')

module.exports = {
   getStates: async (CUSTOMER_ID)=>{
       var states = await db('MACHINE_PROCESS').where({CUSTOMER_ID})
       console.log(states)
       return states
   }

};