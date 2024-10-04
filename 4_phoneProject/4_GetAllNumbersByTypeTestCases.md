# Test cases for the GetAllNumbersType

### **getAllNumbersByType(type)**

Returns an array of objects consisting of names and numbers of given type. If no number of type is found , an aempty array [] is returned. If a person has multiple numbers of given type, each of them will be in its own object.

If  the parameter is missing, throws an exception `'missing parameter'`.

The format of the returned  object is:

```json
    {"firstName":"", "lastName":"", "number":{"type":"", "tel":""}}
```

#### For example `type` work:

```json
    [
        {"firstName":"Leila", "lastName":"Hokki",
         "number":{"type":"work", "tel":"87654321"}},
        {"firstName":"Leila", "lastName":"Hokki",
         "number":{"type":"work", "tel":"123454321"}},
        {"firstName":"Matt", "lastName":"River",
         "number":{"type":"work", "tel":"12345654321"}},
    ]
```

### Test 1: type:mobile
Test uses default data

```js
const register = new PhoneRegister(defaultData);
register.getAllNumbersByType('mobile')
```

returns
```json
[
        {"firstName":"Matt", "lastName":"River",
         "number":{"type":"mobile", "tel":"87654321"}},
    ]
```

### Test 2: type:work
Test uses default data

```js
const register = new PhoneRegister(defaultData);
register.getAllNumbersByType('mobile')
```

returns
```json
    [
        {"firstName":"Leila", "lastName":"Hokki",
         "number":{"type":"work", "tel":"87654321"}},
        {"firstName":"Leila", "lastName":"Hokki",
         "number":{"type":"work", "tel":"123454321"}},
        {"firstName":"Matt", "lastName":"River",
         "number":{"type":"work", "tel":"12345654321"}},
    ]
```

### Test 3: type:x
Test uses the default data

```js
const register = new PhoneRegister(defaultData);
register.getAllNumbersByType('x')
```

returns []

### Test 4: Missing parameter
Test uses the default data

```js
const register = new PhoneRegister(defaultData);
register.getAllNumbersByType();
```

throws an exception `'missing parameter'`

### Test 5. Test type ""

#### 5.1: Testing with default data
```js
const register = new PhoneRegister(defaultData);
register.getAllNumbersByType('');
```

returns []

### 5.2: testing with modified data
Using modified data

Modified test data
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
```js
const register = new PhoneRegister(modifiedData);
register.getAllNumbersByType('');
```

returns
```json
[
        {"firstName":"Leila", "lastName":"Hokki",
         "number":{"type":"", "tel":"87654321"}},
]
```