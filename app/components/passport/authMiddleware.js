module.exports = function isLoggedIn(req, res, next) {
 
    if (req.isAuthenticated())
     
        return next();
         
    res.send('you are signed out');
 
}