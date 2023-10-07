const { log } = require('console');
const http = require('http');
const port = 8000;

const requestHandler = (request, response) => {
    console.log(request.url);
    if (request.url === '/') {
        response.end('Vous êtes en page d\'accueil');
    } else if (request.url === '/about') {
        response.end('Vous ête sur la page "about"');
    } else {
        response.end('Default page, not "/", and not "/default" too');
    }
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        console.log("nope");
    } else {
        console.log(`Server is listening port ${port}`);
    }
});
