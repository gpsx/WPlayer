const db = require('../../config/db')
const utils = require('./../utils/')

module.exports = {
    insertCustomer: async (custumer) =>{
        console.log(custumer)
        var key = utils.getRandomCode()
        if(custumer.steamId == "") custumer.steamId = null
        var user = { 
            CUSTOMER_EMAIL : custumer.email,
            CUSTOMER_PASSWORD : custumer.senha,
            PLAYER_ID : custumer.steamId,
            CUSTOMER_NAME: custumer.nome,
        }
        await db('CUSTOMER').insert(user)
        var result = await db('CUSTOMER').orderBy('CUSTOMER_ID', 'desc').first()
        if (user.PLAYER_ID != null) {
            await db('MACHINE').insert({
                CUSTOMER_ID: result.CUSTOMER_ID,
                MACHINE_NAME: user.CUSTOMER_NAME +" PC",
                MACHINE_KEY: key
            })
        }
        await console.log(result);
    },
    authenticateLogin: async (user, req)=>{
        user = await db('CUSTOMER')
                .where({CUSTOMER_EMAIL: user.email})
                .where({CUSTOMER_PASSWORD: user.senha})
                .first()
        req.session.user = user
        if (user) {
			if (user.PLAYER_ID == null) {
                return '/corp/home'
            }else{
                console.log('porcaria');
                var machine = await db('MACHINE').where({ CUSTOMER_ID: req.session.user.CUSTOMER_ID }).first()
                console.log(machine);
                req.session.user.MACHINE_KEY = machine.MACHINE_KEY
                console.log(req.session.user);
                return '/gamer/home'
            }
		}else{
			return '/login'
		}
    }
};