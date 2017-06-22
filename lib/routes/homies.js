

// const router = require('hapi-router');
const Boom = require('boom');
// const Homie = require('../models/homie');
// const uuid = require('uuid');
// const Joi = require('joi');

exports.register = function (server, options, next) {

    const db = server.app.db;
    console.log('db', db);
    console.log('server.app', server.app);

    server.route({
        method: 'GET',
        path: '/homies',
        handler: function (request, reply) {
            // header: 'Content-type:application/json';

            db.collection('homies').find((docs) => {

                // if (err) {
                //     return reply(Boom.wrap(err, 'Internal MongoDB error'));
                // }
          
                reply(JSON.stringify(docs));
            });

        }
    });

    // server.route({
    //     method: 'POST',
    //     path: '/homies',
    //     handler: function (request, reply) {

    //         const homie = request.payload;

    //         //Create an id
    //         homie._id = uuid.v1();

    //         db.homies.save(homie, (err, result) => {

    //             if (err) {
    //                 return reply(Boom.wrap(err, 'Internal MongoDB error'));
    //             }

    //             reply(homie);
    //         });
    //     },
    //     config: {
    //         validate: {
    //             payload: {
    //                 name: Joi.string().required(),
    //                 likes: Joi.string().required(),
    //                 from: Joi.number()
    //             }
    //         }
    //     }
    // });


    return next();
};

exports.register.attributes = {
    name: 'routes-homies'
};