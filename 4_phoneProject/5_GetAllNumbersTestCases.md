# Test cases for getAllNumbers

### **getAllNumbers()**

Retruns all phone numbers in an array, each as an object of form:

```json
{"firstname":"", "lastname":"", "phones":[]}
```

The phone object in forms is of form:
```json
{"type":"", "number":""}
```

If the person doesn't have a phone (the phone field is an empty array), then the person is not added into the result array.

If all persons are missing, an empty array is returned.

### Test 1: testing with default data

returns the same array that was used to create the register

### Test 2: some phones are missing 
Using modified data:

testData:

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
        "phones":[]
    },
    {
        "firstName":"Amanda",
        "lastName":"Brown",
        "phones":[
            {"type":"home", "number":"12345678"}
        ]
    }
]
```

returns 

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
    }
]
```

### Test 3: first and third person missing phones

```json
[
    {
        "firstName":"Mary",
        "lastName":"Jones",
        "phones":[]
    },
    {
        "firstName":"Matt",
        "lastName":"Rivers",
        "phones":[
                {"type":"", "number":"123454321"},
        ]
    },
    {
        "firstName":"Amanda",
        "lastName":"Brown",
        "phones":[
                {"type":"work", "number":"11112222"},
        ]
    }
]
```

### Test 4: All phones are missing
```json
[
    {
        "firstName":"Mary",
        "lastName":"Jones",
        "phones":[]
    },
    {
        "firstName":"Matt",
        "lastName":"Rivers",
        "phones":[]
    },
    {
        "firstName":"Leila",
        "lastName":"Hokki",
        "phones":[]
    }
]
```

returns an empty array []

### Test 5: All persons missing
Testdata is an empty array []
Returns []

