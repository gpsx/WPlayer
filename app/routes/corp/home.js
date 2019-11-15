var controller = require('../../controllers/home-corp')

module.exports = function (app) {
  app.get('/corp', async (req, res) => {
    res.redirect('/corp/home')
  });
  app.get('/corp/home', async (req, res) => {
    var information = await controller.getInformation(req.session.user.CUSTOMER_ID)
    console.log(information);
    
    res.render('corp/home', { information });
  });
  app.post('/add/machine', async (req, res)=> {
    await controller.insertMachine(req.body.name, req.session.user.CUSTOMER_ID)
    res.redirect('/corp/home')
  })
}