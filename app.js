var port = Number(process.env.PORT || process.argv[2] || '8000');
var ip = Number(process.env.IP || process.argv[3] || '0.0.0.0');

var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var favicon = require('static-favicon');
var POSTMARK_KEY = process.env.POSTMARK_API_KEY;
var postmark = require("postmark")(POSTMARK_KEY)
var path = require('path');

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser()); 
app.use(methodOverride()); 	
app.use(require('less-middleware')(path.join(__dirname, 'public')));


app.locals.title = 'Killbot Logic';
app.locals.email = 'iamnumber42@killbotlogic.com';
app.get('/', function (req, res) {
    res.render('index', { title: app.locals.title });
});
app.post('/send_message', function (req, res) {
    
    
    postmark.send({
        "From": app.locals.email, 
        "To": app.locals.email, 
        "Subject": "Killbot Logic site enquiry from (" + req.body.email + ": " + req.body.name + ")", 
        "TextBody": req.body.message,
        "Tag": "killbot-logic-site"
    }, function (err, to) {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Email sent to: %s", to);
    });
    console.log(req);
    res.send({ message: 'Your message has been sent. Expect a reply soon.', success: true });
});

process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});

/*
app.get('/', function(req, res) {
    res.send('hello world');
});*/

// call the Router
var dogs = express.Router();

	dogs.get('/', function(req, res, next) {
		res.send('hello dogs');
	});

	dogs.post('/', function(req, res, next) {
                // stuff stuff stuff
	});

// call our router we just created
app.use('/dogs', dogs);

var server = app.listen(port, ip, function() {
    console.log('Listening on port %d', server.address().port);
});