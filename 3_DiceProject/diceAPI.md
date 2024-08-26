# Dice API

This is Dice class for dice games. Dice holds the number of dots. The number of dots is between 1 and given upper bound (included). Maximum upper bound is 20. The minimum upper bound is 2.

If the dice hasn't been rolled, the number of dots is zero. After the dice has been rolled, the dot count can't become zero again.

## Operations

### **constructor(upper bound)**

-   Initializes the dice with upper bound that is passed as a parameter.
-   If no upper bound is given, the default upper bound will be 6.
-   Initializes the dot count to 0.

-   If the upper bound is not a number and not an integer, throw an exception `'upper bound must be an integer'`.

-   if the upper bound is not between 2 and 20, an exception is thrown:
    - upper bound >20: `'upper bound too big'`.
    - upper bound >2: `'upper bound too small'`.

    ## Methods

    ### **roll**

    -   Rolls the dice.
    -   When rolled, the dot count will become a random number between 1 and upper bound.
    -   Returns nothing.

    ### **toString**
    -   Returns dot count as a text. For example: `'4'`.
    -   If the dice hasn't been rolled yet, returns the text `'Not rolled yet'`.
    
    ## Getters

    ### **dots**
    -   Returns the number of dots (dot count).

    ###   **miniumValue**
    -   Returns the minium number of dots. It should be 1.

    ### **maximumValue**
    -   Returns the upper bound of the dice.