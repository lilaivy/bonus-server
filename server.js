
const Hapi = require('hapi');
const mongojs = require('mongojs');

//creating server with host/port here:
const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

//connecting to Mongo here:
server.app.db = mongojs('mongodb://localhost:27017/friends', ['homies']);

//Load plugins and start server
server.register([
    require('./lib/routes/homies')
], (err) => {

    if (err) {
        throw err;
    }

    // Start the server
    server.start((err) => {
        console.log('Server running at:', server.info.uri);
    });

});




