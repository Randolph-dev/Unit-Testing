'use strict';

const Dice = require('../dice');

describe('testing the constructor', () => {
  const dice = new Dice();

  test('maximumValue is 6', () => {
    expect(dice.maximumValue).toBe(6);
  });
  test('minimumValue is 1', () => {
    expect(dice.minimumValue).toBe(1);
  });
  test('dots is zero', () => {
    expect(dice.dots).toBe(0);
  });
});

describe('Create a dice with upperbounds 2-20', ()=>{
  const testValues =
    new Array(19).fill(2).map((value, ind) => [value + ind]);

    test.each(testValues)('test upper bound %s', upperbound=>{
      const dice=new Dice(upperbound);
      expect(dice.dots).toBe(0);
      expect(dice.minimumValue).toBe(1);
      expect(dice.maximumValue).toBe(upperbound);
    });
});

describe('Test the exceptions',()=>{
  const testValues =[
     ['a', `'upperbound must be an integer'`],
     [1, `'upperbound must be an integer'`],
     [2.5 , `'upperbound must be an integer'`],
     [null , `'upperbound must be an integer'`],
     [true , `'upperbound must be an integer'`],
     [false , `'upperbound must be an integer'`],
     [0 , `'upper bound too small'`],
     [1 , `'upper bound too small'`],
     [-1 , `'upper bound too small'`],
     [21 , `'upper bound too big'`]
  ];

  test.each(testValues)('upper bound %s throws "%s"',(ub,text)=>{
    expect(()=>new Dice(ub)).toThrow(text);
  });
});

describe('test caes for roll',()=>{
  describe('Create a dice with no upper bound given',()=>{
    const dice=new Dice();

    test('when rolled', ()=>{
      expect(dice.dots).toBeGreaterThanOrEqual(1);
      expect(dice.dots).toBeLessThanOrEqual(6);
    });
  });
});

describe('create a dice with upper bounds 2...20',()=>{
  const testValues=
  new Array(19).fill
})