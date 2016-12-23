
var express                     = require('express');
var app                         = express();

var path                        = require('path');
var logger                      = require('morgan');
var cookieParser                = require('cookie-parser');
var bodyParser                  = require('body-parser'); 

//Auth Configs
var jwt                         = require('jsonwebtoken');
var passport                    = require('passport');
var JwtStrategy                 = require('passport-jwt').Strategy,
    ExtractJwt                  = require('passport-jwt').ExtractJwt;
var opts                        = {}

opts.jwtFromRequest             = ExtractJwt.fromAuthHeader();
opts.secretOrKey                = 'secret';
opts.issuer                     = "accounts.examplesoft.com";
opts.audience                   = "yoursite.net";

//Specify an auth strategy for passport
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log('Authing via passport and a jwt Strategy: ');
    console.log('jwt_payload');
    console.log(jwt_payload);

    /** How to auth via a jwt
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            console.log('error: ');
            return done(err, false);
        }
        if (user) {
            console.log('user authed');
            done(null, user);
        } else {
            console.log('you could create a new account');
            done(null, false);
        }
    });
     */
}));

/**
 * Then use it like so: 
 app.post('/profile', passport.authenticate('jwt', { session: false}),
    function(req, res) {
        res.send(req.user.profile);
    }
);
 */

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Enable CORS for testing. Maybe remove later.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//SPA Root
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'/dist/index.html'));
});

//API Root
app.get('/api', function (req, res) { res.send('API Root'); });

//Login Route
app.post('/api/login', function (req, res) { 
    var loggedIn = false;
    var authedUser;

    var username = req.body.username;
    var pw       = req.body.password;

    //Mock the auth
    if(username == 'peb7268' && pw == 'tp') {
        loggedIn = true;
        authedUser = {
            username: username,
            password: pw
        }
    }

    var token = jwt.sign({ 
        exp:  Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
         'authedUser' : authedUser 
        }
    }, 'mysecret');

    //If found
    if(loggedIn) {
        res.statusCode = 200;
        res.send(token); 
    }
    
    res.send('Login failed');
});

//Set the ports
if (app.get('env == "development"')){
    app.listen(3000, function () {
        console.log('Example listening on port 3000!');
    });
} else {
    app.listen(8080, function () {
        console.log('App & Sockets listening on port 8080!');
    });
}

module.exports = app;