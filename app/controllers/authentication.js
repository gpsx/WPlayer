const db = require('../../config/db')
const utils = require('./../utils/')

module.exports = {
    insertCustomer: async (custumer) =>{
        console.log(custumer)
        var user = { 
            CUSTOMER_EMAIL : custumer.email,
            CUSTOMER_PASSWORD : custumer.senha,
            PLAYER_ID : custumer.steamId,
            CUSTOMER_KEY: utils.getRandomCode()
        }
        var a = await db('customer').insert(user)
        var result = await db('CUSTOMER')
        await console.log(result, a);
    },
    authenticateLogin: async (user, req)=>{
        user = await db('CUSTOMER')
                .where({CUSTOMER_EMAIL: user.email})
                .where({CUSTOMER_PASSWORD: user.senha})
                .first()
        req.session.user = user
        if (user) {
			if (user.PLAYER_ID == '') {
                return '/corp/home'
            }else{
                return '/gamer/home'
            }
		}else{
			return '/login'
		}
    }
};