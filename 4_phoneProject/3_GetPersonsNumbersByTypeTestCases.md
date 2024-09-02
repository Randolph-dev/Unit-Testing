# Test cases for the GetPersonsNumbersByType

## **getPersonsNumbersByType(firstname, lastname, type)**

Method returns an array of phone numbers of given `type` belonging to given person with `firstName` and `lastName`.

For example Leaila Hokki and work returns
```json
    ["87654321", "123454321"]
```

and Matt Rivers' mobile returns
```json
    ["987654321"]
```

If no person with given name is found, an empty array [] is returned. 
If no number with given type is found, an empty array [] is returned.
If at least one paramater is missing, an exception `'missing parameter'` is thrown.

### Test 1: Leila Hoki and work
Test uses the default data

```js
const register = new PhoneRegister(defaultData);
register.getPersonsNumberByType('Leila', 'Hokki', 'work')
```

expect
```json
    ["87654321", "123454321"]
```
to be returned.

### Test 2: Matt River and mobile
Test uses default data.

```js
const register = new PhoneRegister(defaultData);
register.getPersonsNumberByType('Leila', 'Hokki', 'work')
```

expect
```json
    ["87654321", "123454321"]
```
to be returned.


### Test 3: Wrong name or type
Test uses the default data

Test with values 

#### 3.1    firstname Matt, lastname x, type mobile
```js
const register = new PhoneRegister(defaultData);
register.getPersonsNumberByType('Matt', 'x', 'mobile')
```

#### 3.2 firstname x, lastname River, type mobile
```js
const register = new PhoneRegister(defaultData);
register.getPersonsNumberByType('x', 'River', 'mobile')
```

### 3.3 firstname Matt, lastname River, type x
```js
const register = new PhoneRegister(defaultData);
register.getPersonsNumberByType('Matt', 'River', 'x')
```

returns []

### Test 4: parameter missing
Test uses the default data

#### 4.1 parameter missing `Matt` and `River`

```js
const register = new PhoneRegister(defaultData);
register.getPersonsNumberByType('Matt', 'River')
```
#### 4.2 parameters missing: `Matt`

```js
const register = new PhoneRegister(defaultData);
register.getPersonsNumberByType('Matt')
```
#### 4.3 all parameters missing:

```js
const register = new PhoneRegister(defaultData);
register.getPersonsNumberByType()
```

Expect to throw an exception `'missing parameter'`

### Test 5: testing empty string as type
Using modified data

```json
[
    {
        "firstName":"Leila",
        "lastName":"Hokki",
        "phones":[
            {"type":"home", "number":"12345678"},
            {"type":"", "number":"87654321"},
            {"type":"work", "number":"123454321"},
        ]
    },
    {
        "firstName":"Matt",
        "lastName":"River",
        "phones":[
            {"type":"home", "number":"123456789"},
            {"type":"mobile", "number":"987654321"},
            {"type":"work", "number":"12345654321"}
        ]
    }
]
```

### Get Leila Hokki and ""

expect this to return 
```json
["987654321"]
```