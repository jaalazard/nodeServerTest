const { log } = require('console');
const http = require('http');
const port = 8000;

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('hi');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        console.log("nope");
    } else {
        console.log(`Server is listening port ${port}`);
    }
});
