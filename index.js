const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Passport = require('passport');
const localStrategy = require('passport-local').Strategy;

app.use(bodyParser.urlencoded({ urlencoded: true }));
app.use(Passport.initialize());
app.use(Passport.session());
app.use();

app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(3000, console.log('server is running'));

app.get('/', (req, res) => res.render('home'));
app.get('/login', (req, res) => res.render('login'));
