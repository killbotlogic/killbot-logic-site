var framework = require('total.js');
var http = require('http');
 
var debug = true;
 
framework.run(http, debug, 8080, '0.0.0.0');