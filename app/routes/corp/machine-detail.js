var controller = require('../../controllers/machine-detail')

module.exports = function (app) {
    app.get('/machine/:id', async (req, res) => {
        var information = await controller.getInformation(req.params.id)
        console.log(information);
        
        res.render('corp/machine-detail', {information})
    });
}