
const Hapi = require('hapi');
const mongojs = require('mongojs');

//creating server with host/port here:
const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

//connecting to Mongo here:
server.app.db = mongojs('hapi-rest-mongo', ['homies']);

//Load plugins and start server
server.register([
    require('./routes/homies')
], (err) => {

    if (err) {
        throw err;
    }

    // Start the server
    server.start((err) => {
        console.log('Server running at:', server.info.uri);
    });

});


// server.route({
//     method: 'GET',
//     path: '/',
//     handler: function (request, reply) {
//         reply('Hello, world!');
//     }
// });

// server.route({
//     method: 'GET',
//     path: '/homies',
//     handler: function (request, reply) {
//         reply('friends will show here soon!');
//     }
// });

// server.start((err) => {

//     if (err) {
//         throw err;
//     }
//     console.log(`Server running at: ${server.info.uri}`);
// });