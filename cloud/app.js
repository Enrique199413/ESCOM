
// These two lines are required to initialize Express in Cloud Code.
var express = require('express');


var app = express();



//RUN LOCAL
//var http = require('http');
//var path        = require('path');

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'jade');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body

/*RUN LOCAL*/


/*app.use( require('less-middleware')
({
    src: __dirname.replace('/cloud','/public')
}));
app.use( express.static( path.join( __dirname.replace('/cloud','/public'), '') ) );
*/





// This is an example of hooking up a request handler with a specific request
// path and HTTP verb using the Express routing API.
app.get('/fisica', function(req, res) {
  res.render('fisica');
});

app.get('/user', function(req, res) {
  res.render('user');
});
// // Example reading from the request query string of an HTTP get request.
// app.get('/test', function(req, res) {
//   // GET http://example.parseapp.com/test?message=hello
//   res.send(req.query.message);
// });

// // Example reading from the request body of an HTTP post request.
// app.post('/test', function(req, res) {
//   // POST http://example.parseapp.com/test (with request body "message=hello")
//   res.send(req.body.message);
// });

// Attach the Express app to Cloud Code.

/*RUN LOCAL*/




/*http.createServer( app ).listen( 4500, function () {
    console.log( 'Express server listening on port 4500' );
}); */




//Version for online


app.listen();
