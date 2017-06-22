const Hapi = require('hapi');
const bodyParser = require('hapi-bodyparser');

const app = new Hapi();


app.use(bodyParser());

const homies = require('./lib/routes/homies');
app.use(homies.routes());

module.exports = app;