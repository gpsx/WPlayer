const db = require('../../config/db')
const utils = require('../utils')

module.exports = {
    getInformation: async (CUSTOMER_ID) => {
        var machinesw = await db('MACHINE')
        console.log(machinesw.MACHINE_NAME);  
        var machines = await db('VW_CORP_MACHINES').where({CUSTOMER_ID}).orderBy('COMPUTER_STATE', 'asc')
        for(i in machines){
            switch (machines[i].COMPUTER_STATE) {
                case 'danger':
                    machines[i].STATE_STRING = 'Alerta'
                    break;
                case 'warning':
                    machines[i].STATE_STRING = 'Atenção'
                    break;
                case 'success':
                    machines[i].STATE_STRING = 'Estável'
                    break;
                default:
                    machines[i].COMPUTER_STATE = 'info'
                    machines[i].STATE_STRING = '<h5>'+machines[i].MACHINE_KEY+'</h5>'
              }
        }
        
        return {
            machines
        }
    },
    insertMachine: async (machineName, CUSTOMER_ID) =>{
        var machine = {
            MACHINE_KEY: utils.getRandomCode(),
            MACHINE_NAME: machineName,
            CUSTOMER_ID
        }
        await db('MACHINE').insert(machine) 
    }
}