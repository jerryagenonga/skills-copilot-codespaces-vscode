// create a server
const http = require('http');
const url = require('url');
const port = 3000;

const requestHandler = (request, response) => {
  const parsedUrl = url.parse(request.url, true);
  response.setHeader('Content-Type', 'application/json');
  
  if (parsedUrl.pathname === '/') {
    response.writeHead(200);
    response.end(JSON.stringify({ message: 'Hello, world!' }));
  } else {
    response.writeHead(404);
    response.end(JSON.stringify({ message: 'Not Found' }));
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Something went wrong', err);
  }
  console.log(`Server is listening on ${port}`);
});