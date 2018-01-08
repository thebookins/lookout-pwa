const express = require('express');
//const app = express();
const path = require('path');
const compression = require('compression');
const IO = require('./io');

//app.use(compression());

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

const server = express()
  .use(compression())
//  .use(forceSSL())
  // Run the app by serving the static files in the dist directory
  .use(express.static(__dirname + '/dist'))
  // For all GET requests, send back index.html so that PathLocationStrategy can be used
  .get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  })
  .listen(process.env.PORT || 8080);

IO(server);
