// Imports
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./apiRouter').router;

// Instantiate server
let server = express();

// Body Parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Configure routes
server.get('/', function (req, res) {
    res.setHeader('Content-type', 'text/html');
    res.status(200).send('<h1>Welcome</h1>');
});

server.use('/api/', apiRouter);

// Launch server
server.listen(8080, function () {
    console.log('Server started !');
});