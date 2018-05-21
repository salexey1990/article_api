const routes = require('./routes')
const models = require('../components/database')

const express = require('express');
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars')
const app = express();

app.set('port', (process.env.PORT || 7000));

  // Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// Process application/json
app.use(bodyParser.json());

// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions

//Sync Database
models.sequelize.sync().then(function() {
 
  console.log('Nice! Database looks fine')

}).catch(function(err) {

  console.log(err, "Something went wrong with the Database Update!")

});

//For Handlebars
app.set('views', './views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Routes
app.use('/', routes);

//load passport strategies
require('../components/passport/passport')(passport, models.User);

module.exports = app;