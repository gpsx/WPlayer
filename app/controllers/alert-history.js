const db = require('../../config/db')

module.exports = {
   getStates: async (CUSTOMER_ID)=>{
       var states = await db('VW_HARDWARE')
       console.log(states)
       return states
   }

};