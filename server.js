
var express                     = require('express');
var app                         = express();

var path                        = require('path');
var logger                      = require('morgan');
var cookieParser                = require('cookie-parser');
var bodyParser                  = require('body-parser'); 


//DB Setup
var userSchema, User;
var mongoose                    = require('mongoose');
mongoose.connect('mongodb://localhost/xboxnotifier');

var db                          = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Db connected: ');
    userSchema                  = new mongoose.Schema({
        username: { type: String, required: true },
        password: { type: mongoose.Schema.Types.Mixed,  required: true },
        phone:    { type: Number, required: true }
    });

    //Make the model
    User    = mongoose.model('User', userSchema);
});

/**
 * Twilio!! 
 * Twilio Number: (678) 780-4220
 */ 
var accountSid = 'AC512a626bf5bde7872e7a1c6c96715d0a';
var authToken = '99ef719761d2bf2e93ff11edc80ccbe6';
var client = require('twilio')(accountSid, authToken);  //require the Twilio module and create a REST client


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
app.get('/', function (req, res) { res.sendFile(path.join(__dirname,'/dist/index.html')); });

//Register Route
app.post('/api/register', function(req, res){
    var user = {
        username: req.body.username,
        password: req.body.password,
        phone: req.body.phone
    }

    User.create(user, function(err, phone){
        if(err) {
            console.log(err);
            return;
        }

        res.send(phone); 

    })
});

//Login Route
app.post('/api/login', function (req, res) { 
    var loggedIn = false;
    var authedUser;

    var username = req.body.username;
    var pw       = req.body.password;

    User.findOne({ 'username': username }, function(err, user){
        if(err) throw err;
        authedUser = {
            username: username,
            password: pw,
            phone: user.phone
        };

        if(user.password === pw){
            var token = jwt.sign({ 
                exp:  Math.floor(Date.now() / 1000) + (60 * 60), //1 day
                data: {
                'authedUser' : authedUser 
                }
            }, 'mysecret');

            res.send(token); 
        } else {
            res.send('login:error');
        }
    });
});

//Test msg route
app.post('/api/msg', function(req, res, next){
    var toNumber        = req.body.phone;
    var formattedNumber = '+1' + toNumber; 
    console.log('sending msg to: ' + formattedNumber);

    client.messages.create({
        to: formattedNumber,
        from: '+16787804220',
        body: 'this is a test text from Paul',
    }, function (err, message) {
        if(err) { 
            console.error(err);
            res.send('error');
        } else {
            console.log('success');
            res.send('Message sent successfully. Message ID: ' + message.sid);
        }
    });
});

//API Root
app.get('/api', function (req, res) { res.send('API Root'); });


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