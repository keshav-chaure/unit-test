// Require packages and set the port
const express = require('express');
const port = 3002;
const bodyParser = require('body-parser');
//const routes = require('./routes/routes')
const app = express();



// Router
const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });

    app.get('/users', (request, response) => {
        response.send(users);
    });
}



// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

router(app);

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});