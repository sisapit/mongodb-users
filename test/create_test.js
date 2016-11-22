
const assert = require('assert');
const User = require('../src/user');

describe('TEST-I-CREATE, Creating records', () => {
    it('saves a Joe', (done) => {
        const joe = new User({name: 'Joe'});
        joe.save()
        .then(() => {
            // Has Joe been saved successfully?
            assert(!joe.isNew);
            done();
        });
    });
    it('saves a Donald', (done) => {
        const donald = new User({name: 'Donald'});
        donald.save()
        .then(() => {
            assert(!donald.isNew);
            done();
        });
    });    
});