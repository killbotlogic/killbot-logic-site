var framework = require('total.js');
var http = require('http');
var os = require('os');

var ip = process.argv[4] || '127.0.0.1';
var port = process.argv[3] || '8000';
var debug = true;



framework.run(http, debug, port, ip);