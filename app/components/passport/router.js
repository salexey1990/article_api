const passport = require('passport')
const Router = require('express').Router
const authRouter = Router();

const auth = require('../passport/authMiddleware')


//static pages
authRouter.get('/signup', (req, res) => {
    res.render('signup')
})

authRouter.get('/signin', (req, res) => {
    res.render('signin')
})

authRouter.get('/dashboard', auth, (req, res) => {
    res.render('dashboard')
})

//auth logic
authRouter.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/');
    })
})

authRouter.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',

        failureRedirect: '/signup'
    }

));

authRouter.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',

        failureRedirect: '/signin'
    }

));

module.exports = authRouter;