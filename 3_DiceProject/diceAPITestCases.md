# Dice Test Cases

## Test cases for the constructor

1. Create a dice with no upper bound given 
Initializes a dice with minimumValue 1 and maximumValue 6 and dot count 0.
-   maximumValue6
-   minimumValue1
-   dots 0

2. Create a dice with upperbounds 2-20.
expect:
-   maximumValue upper bound
-   minimumValue 1
-   dots 0

3. Test the exceptions
   Create a dice with upper bound:
    - 'a' throws `'upperbound must be an integer'`
    - '1' throws `'upperbound must be an integer'`
    - 2.5 throws `'upperbound must be an integer'`
    - null throws `'upperbound must be an integer'`
    - true throws `'upperbound must be an integer'`
    - false throws `'upperbound must be an integer'`
    - 0 throws `'upper bound too small'`
    - 1 throws `'upper bound too small'`
    - -1 throws `'upper bound too small'`
    - 21 throws `'upper bound too big'`

## test caes for roll

1. Create a dice with no upper bound given 
roll the dice.
Expect:
dots to be <= 6
and dots >=1

(This should be repeated multiple times. To be checked later)

2. Create a dice with upper bounds 2...20
roll the dice
expect:
dots <= upper bound
dots >= 1

(This should be repeated multiple times. To be checked later)


## Test caes for the toSting
Testing not rolled and rolled.
In both cases create a new dice (no upper bound given)

1. Roll the dice
Expect to return dot count as text. Compare it with dots casted as string.

2. Not rolled
Expect to return `'not rolled yet'`


## test cases for roll version 2
Roll the dice multipel times (100-1000 rounds?)
absolute minimum is the upper bound (maybe 10x upperbound would be enough?)

How can we be certain that we get all numbers from 1 to the upper bound?

We'll gather the numbers (in an array) and check that every number exists at least once.