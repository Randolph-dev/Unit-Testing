# Test cases for getName

## **getName(number)**

The method searches the given phone number from the registry. If the number is found, method returns the owner of that object as a number:

```json
{"firstname":"", "lastname":""}
```

If no phone with given number is found, the method returns `null`.
If the parameter is missing, `null` is also returned.

### Test 1: Leila Hokki home number "12345678"
returns
```json
    {"firstName":"Leila", "number":"12345678"},
```

### Test 2: Leila Hokki home number "2468159"
returns
```json
    {"firstName":"Matt", "number":"2468159"},
```

### Tests 1 and 2 combined
```js
const testValues = [
    ["12345678", {"firstName":"Leila", "lastName":"Hoki"}],
    ["12345678", {"firstName":"Matt", "lastName":"River"}]
]
```

### Test 3: wrong number (non existing number)
Call with number "0000"
returns `null`

### Test 4: missing parameter
returns `null`