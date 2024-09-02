# Phone API

## data
Data will be in a json file. A person can be in the data array only once. Names are unique so for example Leila Hokki can't exist twice in the json. Phone number is unique and can be only once in the json. We also assume that the json file is valid, and no fields are missing, the number can't be an empty string and type or number may be an empty string, or number may not be null or undefined.

Type may be an empty string.

### phones.json

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

## Class PhoneRegister

## **constructor(data)**

The data from phones.json array is passed as a parameter `data`. If the parameter is missing , throws an exception `'phone data is missing'`.

### **getTypes()**

Returns all phone types in an array. The type is added to the result array only once. If there are no phones or no persons, an empty array [] is returned. Type may be an empty string.

For example:

```json
["home", "work", "mobile"]
```

### **getPersonsNumbersByType(firstName,lastName, type)**

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

### **getName(number)**

The method searches the given phone number from the registry. If the number is found, method returns the owner of that object as a number:

```json
{"firstname":"", "lastname":""}
```

If no phone with given number is found, the method returns `null`.
If the parameter is missing, `null` is also returned.