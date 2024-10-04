Reyes Rodriguez


# **End assignment** (computer)


## Task: Create and test ComputerRegister class
Create a class `ComputerRegister` for computer data. Data storage is passed to the constractor as a parameter. Data is in a json array. Use the following json array as default storage. You may need to modify the data or add more versions for testing. 

### datastorage.json

```json
[
  {
    "id": 1,
    "computerName": "MaxEffect 2000",
    "processor": "X-Force",
    "price": 300,
    "stars": "****",
    "colors": [
      "green",
      "orange",
      "red"
    ],
    "info": {
      "comments": "no comments",
      "consumption": "A",
      "model": "silver"
    }
  },
  {
    "id": 2,
    "computerName": "BigFlop Mark II",
    "processor": "X-Force",
    "price": 200,
    "stars": "****",
    "colors": [
      "green",
      "yellow",
      "blue"
    ],
    "info": {
      "comments": "gaming station",
      "consumption": "E",
      "model": "XXL"
    }
  },
  {
    "id": 3,
    "computerName": "GameDelux",
    "processor": "BNE",
    "price": 200,
    "stars": "*****",
    "colors": [
      "white",
      "red",
      "yellow"
    ],
    "info": {
      "comments": "no comments",
      "consumption": "E",
      "model": "XXL"
    }
  },
  {
    "id": 4,
    "computerName": "Cera 2400",
    "processor": "PiTron 3",
    "price": 25,
    "stars": "**",
    "colors": [
      "blue",
      "red",
      "orange"
    ],
    "info": {
      "comments": "no comments",
      "consumption": "D",
      "model": "GT"
    }
  },
  {
    "id": 5,
    "computerName": "King 3000",
    "processor": "X-Force",
    "price": 10,
    "stars": "*",
    "colors": [
      "white",
      "orange",
      "red"
    ]
  }
]
```


# ComputerRegister API

## Constructor

### **constructor(jsondata)**
Initializes ComputerRegister object

>Parameters:
>>The data storage json object is passed as a parameter to the constructor.

>Returns:
>>

>Throws:
>>If the parameter is missing, constructor throws an error `'data storage missing'`


## Methods


### **get_Price(id)**
get the price of the computer

>Parameters:
>>id of the computer which price is to be returned

>Returns:
>>returns the price of a computer matching the given id

>Throws:
>>if no computer with the given id is  found throws an exeption `'nothing found with given searchValue'`

### **has_info(searchKey)**
Method checks based on id if the computer has `info` or not.

>Parameters:
>>searchKey is the id to be searched

>Returns:
>>Returns true if the computer matching the searchKey has `info` object and it is not an empty object else returns false. If parameter searchKey is missing false is returned

>Throws:
>>

### **get_computer_colors(searchKey)**
Returns an array of computer colors. If none found, returns an empty array.

>Parameters:
>>searchKey is the id of the computer

>Returns:
>>colors of the computer as an array or if none is found or it is empty or parameter searchKey is missing, returns an empty array.

>Throws:
>>

### **get_info(searchKey)**
searches the computer matching the searchKey and if match is found returns the info object otherwise null is returned

>Parameters:
>>searchKey is the id of the computer

>Returns:
>>returns the info object of the computer matching the searchKey. If no computer matching the given searchKey is found or searchKey is missing, null will be returned

>Throws:
>>

### **get_total_price_of_computers_by_processor(searchValue)**
returns the total price of all computers that have the same processor than the given searchValue

>Parameters:
>>searchValue is the processor of the computer to be searched

>Returns:
>>total cumulative price of computers matching the searchValue

>Throws:
>>if no computer with the given searchValue is  found throws an exeption `'nothing found with given searchValue'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

# The project

## Create a folder for the testproject
- the name of the folder should be `Rodriguez_Reyes_computer`
- create **package.json**
  - **`npm init -y`**
- install **jest** as development dependency
  - **`npm install jest --save-dev`**
- create folder `__tests__` for tests
- edit the test script in the **package.json**
- use **datastorage.json** as a data source

## Design test cases in separate .md -file
## Implement all tests and test them to fail
## Implement corresponding methods
## Test the project until all tests pass

## Submit the project folder
Submit your project folder acording to instructions given separately.
Remove the `node_modules` folder before submitting.
The project folder should include `package.json` file