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

// app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

// app.get('/api/item', async (req, res) => {

//     // views
//     if (req.session.views) {
//         req.session.views++
//         res.setHeader('Content-Type', 'text/html')
//         res.write('<p>views: ' + req.session.views + '</p>')
//         res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
//         res.end()
//       } else {
//         req.session.views = 1
//         res.end('welcome to the session demo. refresh!')
//       }
// });

const corsOptions = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000,
  "Access-Control-Allow-Headers": "X-Requested-With,content-type",
  "Access-Control-Allow-Credentials": true
};

app.get('/api/sensitive-data', async (req, res) => {
  res.writeHead(200, corsOptions);
  res.end(JSON.stringify({ message: "sensitive data end point" }));
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});


/*

const http = require('http');

const server = http.createServer((req, res) => {
	// res.statusCode = 200;
	// res.setHeader('Content-Type', 'text/plain');
	// res.end('Hello World');

	const corsOptions = {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "OPTIONS, POST, GET",
		"Access-Control-Max-Age": 2592000,
		"Access-Control-Allow-Headers": "X-Requested-With,content-type",
		"Access-Control-Allow-Credentials": true
	};

	if (req.method === "OPTIONS") {
		res.writeHead(204, corsOptions);
		res.end();
		return;
	  }

	if (req.url === '/api/login') {
		console.log(req.method);
		console.log(req.headers.origin);
		console.log(req.body);
		console.log(req.headers);
		console.log('------------');

		// login
		res.writeHead(200, corsOptions);
		res.end(JSON.stringify({ message: "login" }));
	} else if (req.url  ===  '/api/data') {
		res.writeHead(200, {'Content-Type': 'application/json', corsOptions});
		res.end(JSON.stringify({ message: "sign up" }));
	} else {
        res.writeHead(404, {'Content-Type': 'application/json', corsOptions});
        res.end(JSON.stringify({ message: 'Route Not Found' }));
	}

	// 	res.statusCode = 200;
	// 	res.setHeader('Content-Type', 'text/plain');
	// 	res.end('Hello World');
});

const PORT  = 4000;

server.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});


/*

save data on a json

- learn cors related bugs
- create authenticate pages

*/ 