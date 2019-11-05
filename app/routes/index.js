var func = require('./../controllers/index')
module.exports = function(application){
	application.get('/', async function(req, res){
		await func.sayHelloInEnglish()
		res.send('Bem vindo a sua app NodeJS!');
	});
}