process.env.MONGODB_URI = 'mongodb://localhost:27017/friends-test';
const connection = require('mongoose-hapi').connection;

module.exports = {
    drop() {
        return connection.dropDatabase();
    }
};