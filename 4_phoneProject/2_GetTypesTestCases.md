# Test cases for getTypes

### **getTypes()**

Returns all phone types in an array. The type is added to the result array only once. If there are no phones or no persons, an empty array [] is returned. Type may be an empty string. Type or number may not be null or undefined.

For example:

```json
["home", "work", "mobile"]
```

## Test 1: getTypes from the default data from phones.json

Create register with default data
```js
const register = new PhoneRegister(defaultData);
register.getTypes();
```

returns
```json
["home","work","mobile"]
```

## Test 2: No persons
Create register with an empty array.
```js
const register = new PhoneRegister([]);
register.getTypes();
```

Returns an empty array [].

## Test 3: persons have no phones

Test data:

```json
[
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
```

Create register with test data
```js
const register = new PhoneRegister(testData);
register.getTypes();
```

Returns an empty array [].

## Test 4: Only work numbers

Test data:

```json
[
    {
        "firstName":"Leila",
        "lastName":"Hokki",
        "phones":[
            {"type":"work", "number":"87654321"},
            {"type":"work", "number":"123454321"},
        ]
    },
    {
        "firstName":"Matt",
        "lastName":"River",
        "phones":[
            {"type":"work", "number":"12345654321"}
        ]
    }
]
```

returns
```json
["work"]
```

## Test 5: three persons, four types

testData
```json
[
    {
        "firstName":"Leila",
        "lastName":"Hokki",
        "phones":[
            {"type":"home", "number":"12345678"},
            {"type":"work", "number":"87654321"},
            {"type":"work", "number":"123454321"},
        ]
    },
    {
        "firstName":"Mary",
        "lastName":"Jones",
        "phones":[
            {"type":"cottage", "number":"12345678"},
        ]
    }
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

returns
```json
["home","work","cottage","mobile"]
```

## Test 6: GetType with empty type

test data
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

returns
```json
["home","","work","mobile"]
```

## Test 7: All types are empty strings 

test data
```json
[
    {
        "firstName":"Leila",
        "lastName":"Hokki",
        "phones":[
            {"type":"", "number":"12345678"},
            {"type":"", "number":"87654321"},
            {"type":"", "number":"123454321"},
        ]
    },
    {
        "firstName":"Matt",
        "lastName":"River",
        "phones":[
            {"type":"", "number":"123456789"},
            {"type":"", "number":"987654321"},
            {"type":"", "number":"12345654321"}
        ]
    }
]
```

returns
```json
[""]
```