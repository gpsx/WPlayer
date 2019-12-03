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
var machineController = require('../app/controllers/machine-detail')
var utils = require('../app/utils/index')

//const PORT = process.env.PORT || 3000
app.set('port', (process.env.PORT || 5000));
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
var server = app.listen(app.get('port'), () => {	
	console.log(`Executando na porta ${ app.get('port') }`)
})

var s = io(server);
/* exportar o objeto app */
module.exports = app, s;

s.on('connection', (socket) => {//É mostrado quando alguem se conecta 

	socket.on('requestCorpMachines', async (CUSTOMER_ID)=>{	
		console.log('Data request on server...');
		var machines = await corpController.getInformation(CUSTOMER_ID)
		console.log(machines);
		s.to(socket.id).emit('getCorpMachines',machines);
	})
	socket.on('requestMachinePercent', async (key)=>{	
		console.log('Data request on server...');
		var machine = await machineController.getStates(key)
		if (machine == undefined) {
			data = {
				CPU: 0,
				RAM: 0,
				DISC: 0,
				GPU: 0
			}
		}else{
			data = {
				date: utils.formatDate(machine.INSERT_TIME),
				CPU: Math.round((machine.CPU) * 100),
				RAM: Math.round((machine.RAM) * 100),
				DISC: Math.round((machine.DISC) * 100),
				GPU: Math.round((machine.GPU) * 100)
			}
		}
		console.log(data);
		s.to(socket.id).emit('getMachinePercent',data);
	})
	
})
