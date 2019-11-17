var db = require('../../config/db')
var utils = require('../utils/index')

module.exports = {
    getInformation: async (MACHINE_KEY) => {
        var machine_view = await db('VW_CORP_MACHINES').where({MACHINE_KEY}).first()
        //var machine_info = await db('MACHINE').where({MACHINE_KEY}).first()
        var machine_process = await db('MACHINE_PROCESS').where({MACHINE_KEY})
        var theMachine = {
            key: machine_view.MACHINE_KEY,
            computer_state: machine_view.COMPUTER_STATE,
            name: machine_view.MACHINE_NAME,
            CPU: getData(machine_process, 'CPU'),
            DISC: getData(machine_process, 'DISC'),
            RAM: getData(machine_process, 'RAM'),
            GPU: getData(machine_process, 'GPU'),
            state: getState(machine_process)
        }
        console.log(theMachine);
        
        return theMachine
    },
    getStates: async (MACHINE_KEY)=>{
        var machine_process = await db('MACHINE_PROCESS').where({MACHINE_KEY}).orderBy('INSERT_TIME','desc').first()
        return machine_process
    }
}
getData = (machine_process, propertie)=>{
    var data = []
    for(process of machine_process){
        data.push({
            data: Math.round((process[propertie]) * 100),
            date: utils.formatDate(process.INSERT_TIME)
        })
    }
    return data
}
getState = (machine_process) => {
    var data = []
    for(state of machine_process){
        data.push({
            CPU: Math.round((state.CPU) * 100),
            RAM: Math.round((state.RAM) * 100),
            DISC: Math.round((state.DISC) * 100),
            GPU: Math.round((state.GPU) * 100),
            date: utils.formatDate(state.INSERT_TIME)
        })
    }
    return data
}
