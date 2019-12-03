var db = require('../../config/db')
var utils = require('../utils/index')

module.exports = {
    getInformation: async (MACHINE_KEY) => {
        var machine_view = await db('VW_CORP_MACHINES').where({MACHINE_KEY}).first()
        //var machine_info = await db('MACHINE').where({MACHINE_KEY}).first()
        var percents = await db('MACHINE_PROCESS').where({MACHINE_KEY}).orderBy('INSERT_TIME','desc')
        var theMachine = {
            key: machine_view.MACHINE_KEY,
            computer_state: machine_view.COMPUTER_STATE,
            name: machine_view.MACHINE_NAME,
            CPU: getData(percents, 'CPU'),
            DISC: getData(percents, 'DISC'),
            RAM: getData(percents, 'RAM'),
            GPU: getData(percents, 'GPU'),
            state: getState(percents)
        }
        switch (theMachine.computer_state) {
            case 'danger':
                theMachine.state_string = 'Alerta'
                theMachine.icon = 'fa-thumbs-o-down'
                break;
            case 'warning':
                theMachine.state_string = 'Atenção'
                theMachine.icon = 'fa-warning'
                break;
            case 'success':
                theMachine.state_string = 'Estável'
                theMachine.icon = 'fa-thumbs-o-up'
                break;
            default:
                theMachine.computer_state = 'info'
                theMachine.state_string = 'Sem dados'
                theMachine.icon = 'fa-cog'
          }
        console.log(theMachine);
        
        return theMachine
    },
    getStates: async (MACHINE_KEY)=>{
        var percents = await db('MACHINE_PROCESS').where({MACHINE_KEY}).orderBy('INSERT_TIME','desc').first()
        return percents
    }
}
getData = (percents, propertie)=>{
    var data = []
    for(p of percents){
        data.push({
            data: Math.round((p[propertie]) * 100),
            date: utils.formatDate(p.INSERT_TIME)
        })
        console.log(data.length);
        
        if (data.length > 15) {
            data.shift()
        }
    }
    return data
}
getState = (percents) => {
    var data = []
    for(state of percents){
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
