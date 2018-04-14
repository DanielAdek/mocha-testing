const expect = require('chai').expect;
const app = require('../app');

describe('Algorithms', () => {
    describe('Testiing for object creation', () => {
        it('should be an object', (done) => {
            expect(app).to.be.an('object');
            done();
        });
        it('should have a property evenNumber', (done) => {
            expect(app).to.have.property('evenNumber')
            done();
        });
        it('should have a property oddNumber', (done) => {
            expect(app).to.have.property('oddNumber');
            done();
        });
    });
    describe('Sum of even numbers between 1 - 10', () => {
        it('should return the sum of even numbers equals 30', (done) => {
            expect(app.evenNumber).to.be.a('number');
            expect(app.evenNumber).to.be.eql(30);
            done();
        });
    });
    describe('Sum of odd numbers between 1 - 10', () => {
        it('should return a sum of odd numbers', (done) => {
            expect(app.oddNumber).to.be.a('number');
            expect(app.oddNumber).to.eql(25);
            done();
        });
    });
});