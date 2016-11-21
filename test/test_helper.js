const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
    .once('open', () => console.log('APP-I-GOOD, Good to go!'))
    .on('error', (error) => {
        console.error('APP-E-FAILED', error);
    });

beforeEach((done) => {
    console.info('TEST-I-DONE');
    mongoose.connection.collections.users.drop(() => {
        // Ready to run the next test!
        done();
    });
});