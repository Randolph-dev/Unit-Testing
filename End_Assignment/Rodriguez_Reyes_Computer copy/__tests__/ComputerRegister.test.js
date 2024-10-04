const ComputerRegister = require('../ComputerRegister');
const data = require('../datastorage.json');

describe('ComputerRegister', () => {
  let register;

  beforeEach(() => {
    register = new ComputerRegister(data);
  });

  test('should throw an error if data storage is missing', () => {
    expect(() => new ComputerRegister()).toThrow('data storage missing');
  });

  test('should return the price of a computer by id', () => {
    expect(register.get_Price(1)).toBe(300);
    expect(register.get_Price(2)).toBe(200);
  });

  test('should throw an error if id is not found in get_Price', () => {
    expect(() => register.get_Price(999)).toThrow('nothing found with given searchValue');
  });

  test('should return true if computer has info', () => {
    expect(register.has_info(1)).toBe(true);
    expect(register.has_info(5)).toBe(false);
  });

  test('should return an array of colors for a given computer', () => {
    expect(register.get_computer_colors(1)).toEqual(['green', 'orange', 'red']);
    expect(register.get_computer_colors(999)).toEqual([]);
  });

  test('should return the info object for a given computer', () => {
    expect(register.get_info(1)).toEqual({
      comments: 'no comments',
      consumption: 'A',
      model: 'silver'
    });
    expect(register.get_info(999)).toBe(null);
  });

  test('should return the total price of computers by processor', () => {
    expect(register.get_total_price_of_computers_by_processor('X-Force')).toBe(510);
  });

  test('should throw an error if processor is not found', () => {
    expect(() => register.get_total_price_of_computers_by_processor('Unknown Processor')).toThrow('nothing found with given searchValue');
  });
});