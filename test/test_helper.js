const mongoose = require('mongoose');

// Let Mongoose use the ES6 promise implementation.
mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connect('mongodb://localhost/users_test');

    // Note: Establishing a connection to MongoDB can take some time. So, take
    // care to wait until the connection is established and run the tests only then.
    mongoose.connection
        .once('open', () => {
            // Wait until the connection is open and only then call 
            // the done callback in order to run the first test case.            
            console.log('NOSQL-I-OPEN, Connection established');
            done();
        })
        .on('error', (error) => {
            console.error('DB-E-FAILED', error);
        });
});

beforeEach((done) => {
    console.info('TEST-I-BEFORE, Before test case callback');
    mongoose.connection.collections.users.drop(() => {
        // Ready to run the next test!
        done();
    });
});

afterEach((done) => {
    console.info('TEST-I-AFTER, After test case callback');
    done();
});