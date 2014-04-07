var framework = require('total.js');
//var express = require('express');
var http = require('http');
var os = require('os');
var webshot = require('webshot');
var fs = require('fs');

var port = Number(process.env.PORT || process.argv[2] || '8000');
var debug = true;

process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});

getScreenShot('acsfoundation');
getScreenShot('thebigdayin');
getScreenShot('cbdstorage');
getScreenShot('sydneystoragelockers');
getScreenShot('documentstoragemanagement');



if (process.argv[3])
    framework.run(http, debug, port, process.argv[3]);
else
    framework.run(http, debug, port);

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