
//This file is essentially created by loopback 

'use strict';

var loopback = require('loopback'); //Use the loopback framework
var boot = require('loopback-boot');

var app = module.exports = loopback(); //create and app, assigned to loopback

app.start = function() {
  return app.listen(function() {   //tells the app what prot to listen on
    app.emit('started');    //logs thats its started
    var baseUrl = app.get('url').replace(/\/$/, '');  //figuring out where to show (from loopback)
    console.log('Web server listening at: %s', baseUrl); //log where its listening
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath; //checks to see if I selected api creation
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);  //tells where to find the API
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
