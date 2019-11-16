/* importar o módulo do framework express */
var express = require('express');

/* importar o módulo do consign */
var consign = require('consign');

/* importar o módulo do body-parser */
var bodyParser = require('body-parser');

/* importar o módulo do express-validator */
var expressValidator = require('express-validator');

/* importar o módulo do express-session */
var expressSession = require('express-session');

/* iniciar o objeto do express */
var app = express();

var io = require('socket.io');

var corpController = require('../app/controllers/home-corp')

const PORT = process.env.PORT || 5000

/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar o middleware express.static */
app.use(express.static('./app/public'));

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/* configurar o middleware express-validator */
//app.use(expressValidator());

/* configurar o middleware express-validator */
app.use(expressSession({
	secret: 'wplayer',
	resave: false,
	saveUninitialized: true
}));

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);

/* parametrizar a porta de escuta */
var server = app.listen(PORT, () => {	
	console.log(`Executando na porta ${ PORT }`)
	console.log('Servidor online e ativo');
})

var s = io(server);
/* exportar o objeto app */
module.exports = app, s;

s.on('connection', (socket) => {//É mostrado quando alguem se conecta 

	socket.on('requestCorpMachines', async (CUSTOMER_ID)=>{	
		console.log('Data request on server...');
		var machines = await corpController.getInformation(CUSTOMER_ID)
		console.log(machines);
		
		s.emit('getCorpMachines',machines);
	})
	
})