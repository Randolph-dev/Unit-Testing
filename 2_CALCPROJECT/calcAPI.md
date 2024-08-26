# Calc library API

## **sum(a,b)**

Function returns the sum of two numbers. Numbers are passed as parameters A and B.

Parameters:
A number, -500 <= a <= 500
B number, -500 =< b =< 500

returns
sum of given numbers A and B as a number, -1000 <= a+b <= 1000

If parameter is missing, throws an exception `'parameter missing'`
If parameters are not numbers, throws an exception `'only numbers allowed'`
If parameters are not in right interval, throw an exception
`'numbers not between -500 and 500'`

## **subtract(a,b)**

Function returns the difference a-b of two numbers. Numbers are passed as parameters 'a' and 'b'.

Parameters:

a number, -500 <= a <= 500
b number, -500 <= b <= 500

Returns difference a-b

If parameter is missing, throws an exception `'parameter missing'`
If parameters are not numbers, throws an exception `'only numbers allowed'`
If parameters are not in right interval, throw an exception
`'numbers not between -500 and 500'`

## Test cases

### sum with integers

sum(1,1) returns 2
sum(2,3) returns 5

a, b, result
[-2, -4, -6],
[-2,  4,  2],
[2,  -4, -2],
[0,   0,  0],
[0,   3,  3],
[3,   0,  3],
[0,  -3, -3],
[-3,  0, -3],
[123, 200, 323],
[-500, -500, -1000],
[500, 500, 1000],
[500, -500, 0],
[-500, 500, 0]

### sum with floats

a, b, result
[10, 11.5, 21.5],
[2.5, 3, 5.5],
[-2.5, 3, 0.5],
[3, -2.5, 0.5],
[-2.5, -3, -5.5],
[-2.5, 2.5, 0],
[2.4, -2.5, -0.1],
[499.99, 500.0, 999.9],
[-499.9, -500.0, -999.9],
[-499.9, 500.0, 0.1],
[-499.9, 500, 0.1],

### parameter missing

sum() throws an exception `'parameter missing'`,
sum(1) throws an exception `'parameter missing'`

### parameters are not numbers

sum('1', '2') throws an exception `'only numbers allowed'`,
sum('1', 2) throws an exception `'only numbers allowed'`,
sum(1, '2') throws an exception `'only numbers allowed'`,
sum('a', 'b') throws an exception `'only numbers allowed'`,
sum('', '') throws an exception `'only numbers allowed'`,
sum(true, true) throws an exception `'only numbers allowed'`,
sum(false, false) throws an exception `'only numbers allowed'`,
sum(true, false) throws an exception `'only numbers allowed'`,
sum(false, true) throws an exception `'only numbers allowed'`,

### parameters not between -500 and 500

sum(1000, 500) throws an exception `'numbers not between -500 and 500'`,
sum(500, 501) throws an exception `'numbers not between -500 and 500'`,
sum(-500.1, 200) throws an exception `'numbers not between -500 and 500'`,
sum(300, 500.1) throws an exception `'numbers not between -500 and 500'`,

## Test cases for subtract

### subtract with integers
[1,1,0],
[2,3,-1],
[-2,-4,2],
[0,0,0],
[3,0,3],
[0,3,-3]

and more...

### subtract with floats
[10.5,11.5,-1.5],
[-2.5,3,-5.5],
[2.5,2.5,0],
[2.4,-2.5,4.9]

and more...

