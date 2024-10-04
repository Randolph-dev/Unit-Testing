'use strict';

module.exports = class PhoneRegister {
    
}

const PhoneRegister = require('.../phoneRegister');
const phones = require('.../phones.json');

describe('Testing constructor', () => {
    test('Test 1: missing parameter throw an exception', () => {
        expect(()=> new PhoneRegister()).toThrow('phone data missing');
    });
});