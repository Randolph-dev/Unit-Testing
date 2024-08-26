'use strict';

const { default: expect } = require('expect');
const { afterAll, test, beforeEach, beforeAll } = require('jest-circus');
const { afterEach } = require('node:test');
const { describe } = require('yargs');

test('This is the first test', () => {
  console.log('first test');
});

it('This is test 2', () => {
  console.log('test 2');
});

beforeAll(() => {
  console.log('beforeAll', 'init before all tests');
});

afterAll(() => {
  console.log('afterAll', 'cleaning after all tests');
});

describe('This is a group A', () => {
  beforeEach(() => {
    console.log('beforeEach', 'run before each in group A');
  });
  afterEach(() => {
    console.log('afterEach', 'run after each test');
  });
  test('first test in group A', () => {
    console.log('first in A');
  });
  test('second test in gorup A', () => {
    console.log('second in A');
  });
});

describe('This is group B', () => {
  beforeAll(() => {
    console.log('beforeAll in B');
  });
  describe('This is group 1 in B', () => {
    test('Test 1 in B', () => {
      console.log('1 in B');
    });
    test('test 2 in B', () => {
      console.log('2 in B');
    });
  });

  describe('This is group 2 in B', () => {
    test('test 1 in B2', () => {
      console.log('1 in B2');
    });
  });
});

describe('Test concatenation function', () => {
  const concat = (partA, partB) => ""+partA + partB;

  test('testing concat("first", "last") returns "firstlast"', () => {
    expect(concat('first', 'last')).toBe('firstlast');
  });
  test('testing concat(1,2) returns 12', () => {
    expect(concat(1, 2)).toBe(12);
  });
});

describe('This is testing for exceptions', ()=>{
    function testFunction(){
        throw Error('This is an exception');
    }

    test('function throws an exception',()=>{
        expect(()=>testFunction()).toThrow('This is an exception');
    });
});