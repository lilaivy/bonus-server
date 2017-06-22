
const Boom = require('boom');

exports.register = function (server, options, next) {

    const db = server.app.db;

    server.route({
        method: 'GET',
        path: '/homies',
        handler: function (request, reply) {

            db.homies.find((err, docs) => {

                if (err) {
                    return reply(Boom.wrap(err, 'Internal MongoDB error'));
                }
          
                reply(JSON.stringify(docs));
            });

        }
    });

    return next();
};

exports.register.attributes = {
    name: 'routes-homies'
};