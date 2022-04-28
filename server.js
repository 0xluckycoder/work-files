'use strict'

const express = require('express');
const app = express();
const session = require('express-session');
const logger = require('morgan');

app.use(express.json());
app.use(logger('dev'));

// app.use(session({ secret: 'mycat', cookie: { maxAge: 60000 } }));

// app.use(session({
//     resave: false, // don't save session if unmodified
//     saveUninitialized: false, // don't create session until something stored
//     secret: 'keyboard cat',
//     store: 'hello'
// }));

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

app.get('/api/item', async (req, res) => {
    // console.log('views', req.session.views);
    // res.send('Hello World');
    // res.json({ message: 'hello'});

    // views
    if (req.session.views) {
        req.session.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + req.session.views + '</p>')
        res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
        res.end()
      } else {
        req.session.views = 1
        res.end('welcome to the session demo. refresh!')
      }
});


/*

[x] - create boiler plate code using sessions
[/] - try to add session separately
    [ ] - read MDN session
    [ ] - read MDN cookies
    [ ] - read MDN Localhost
[ ] - try to add cookie separately
[ ] - add both cookie and session together and understand the reason for that
*/ 

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});