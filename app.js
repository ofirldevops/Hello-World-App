const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
	response.end('Hello World!');
}

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
	if (err) {
		return console.loc('Error:', err);
	}
	console.log('Server listening on port ${port}');
});
