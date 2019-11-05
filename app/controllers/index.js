const db = require('../../config/db')

module.exports = {
    sayHelloInEnglish: async () =>{
        var apps = await db('APPS')
        console.log(apps)
    },
    
    sayHelloInSpanish: function() {
        return "Hola";
    }
};