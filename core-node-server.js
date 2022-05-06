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
});

const PORT  = 4000;

server.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});