const db = require('../../config/db')
const utils = require('./../utils/')

module.exports = {
    insertCustomer: async (custumer) =>{
        console.log(custumer)
        var user = { 
            CUSTOMER_EMAIL : custumer.email,
            CUSTOMER_PASSWORD : custumer.senha,
            PLAYER_ID : "aaaaaa",
            CUSTOMER_NAME: custumer.nome,
        }
        await db('CUSTOMER').insert(user)
        var result = await db('CUSTOMER')
        await console.log(result);
    },
    authenticateLogin: async (user, req)=>{
        var key = utils.getRandomCode()
        user = await db('CUSTOMER')
                .where({CUSTOMER_EMAIL: user.email})
                .where({CUSTOMER_PASSWORD: user.senha})
                .first()
        req.session.user = user
        if (user) {
			if (user.PLAYER_ID == '') {
                return '/corp/home'
            }else{
                await db('MACHINE').insert({
                    CUSTOMER_ID: user.CUSTOMER_ID,
                    MACHINE_NAME: user.CUSTOMER_NAME +" PC",
                    MACHINE_KEY: key
                })
                req.session.user.MACHINE_KEY = key
                return '/gamer/home'
            }
		}else{
			return '/login'
		}
    }
};