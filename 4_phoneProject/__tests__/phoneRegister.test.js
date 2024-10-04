'use strict';

const PhoneRegister = require('.../phoneRegister');
const defaultData = require('.../phones.json');

describe('Testing constructor', () => {
    test('Test 1: missing parameter throw an exception', () => {
        expect(()=> new PhoneRegister()).toThrow('phone data missing');
    });
});

describe('Testing getTypes', ()=>{
    test('Test 1: getTypes from the default data', () => {
        const register = new PhoneRegister(defaultData);
        expect(register.getTypes()).toEqual(["home", "work", "mobile"]);
    });

    test('Test 1: getTypes from the default data Version 2', () => {
        const register = new PhoneRegister(defaultData);
        const expectedResult = ["home", "work", "mobile"];

        expect(register.getTypes()).toEqual(expectedResult);

    });

    test('Test 2: No persons', () => {
        const register = new PhoneRegister([]);
        expect(register.getTypes()).toEqual([]);
    });

    test('Test 3: persons have no phoens', () => {
        const testData = [
            {
                "firstName":"Leila",
                "lastName":"Hokki",
                "phones":[]
            },
            {
                "firstName":"Matt",
                "lastName":"River",
                "phones":[]
            }
        ]
    })
});