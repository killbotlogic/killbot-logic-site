var framework = require('total.js');
var http = require('http');
var os = require('os');
var webshot = require('webshot');
var fs = require('fs');

var ip = process.argv[3] || '127.0.0.1';
var port = process.argv[2] || '8000';
var debug = true;

process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});

getScreenShot('acsfoundation');
getScreenShot('thebigdayin');
getScreenShot('cbdstorage');
getScreenShot('sydneystoragelockers');
getScreenShot('documentstoragemanagement');

framework.run(http, debug, port, ip);


function getScreenShot(name) {
    webshot(name + '.com.au', function(err, renderStream) {
    if(err) {
        console.log(err);
    }
    var file = fs.createWriteStream('public/img/screenshots/' + name + '.png', {
        flags: 'w',
        encoding: 'binary'
    });
    renderStream.on('data', function(data) {
        file.write(data.toString('binary'), 'binary');
    });
});
}