const app = require('./app/server/server');

var server = app.listen(app.get('port'), function(){
  console.log('Server is running on port ' + app.get('port'));
});