const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
    describe('SUM operation', function() {
        it('should return the sum of two rounded numbers', function() {
            assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
        });
    });

    describe('SUBTRACT operation', function() {
        it('should return the subtraction of two rounded numbers', function() {
            assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
    });

    describe('DIVIDE operation', function() {
        it('should return the division of two rounded numbers', function() {
            assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return "Error" when dividing by zero', function() {
            assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });
});
