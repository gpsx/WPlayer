const db = require('../../config/db')
var utils = require('../utils')

module.exports = {
   getStates: async (CUSTOMER_ID)=>{
       var states = await db('VW_MACHINE_HISTORY').where({CUSTOMER_ID})
       for (i in states) {
           if (!states[i].INSERT_TIME) {
               var date = utils.formatDate('2019-11-27 21:11:02')
               states[i].INSERT_TIME = date.date + " " + date.time
           }else{
            var date = utils.formatDate(states[i].INSERT_TIME)
            states[i].INSERT_TIME = date.date + " " + date.time
           }
       }
       console.log(states)
       return states
   }

};