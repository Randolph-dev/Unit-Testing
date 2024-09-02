# Test for the constructor

## **constructor(data)**

The data from phones.json array is passed as a parameter `data`. If the parameter is missing , throws an exception `'phone data is missing'`.

### Test 1: Missing parameter throws an exception

```js
new PhoneRegister();
```

expect:

This will throw an exception `'phone data missing'`