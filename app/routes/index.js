var func = require('./../controllers/index')
module.exports = function(application){
	application.use(function(req,res,next){
        if(['/login'].indexOf(req.url) === -1 && ['/register'].indexOf(req.url) === -1 && !req.session.user){	  
            res.redirect('/login');
        }else{
            next();
        }
    });
}