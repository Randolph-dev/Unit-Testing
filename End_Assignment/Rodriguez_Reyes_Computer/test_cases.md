# Tests Descriptions

## get_Price Tests

- **Test Name**: should return the price of a computer with valid id 1
  - **Description**: Checks if `get_Price` method returns the correct price for a computer with ID 1.
  - **Expected Result**: This should return `300`.

- **Test Name**: should return the price of a computer with valid id 2
  - **Description**: Checks if `get_Price` method returns the correct price for a computer with ID 2.
  - **Expected Result**: This should return `200`.

- **Test Name**: should throw an error if id is not found in get_Price
  - **Description**: Checks if `get_Price` method throws an error when an invalid or non-existent ID (e.g., 999) is provided.
  - **Expected Result**: This should throw the error "nothing found with the given search value".

## has_info Tests

- **Test Name**: should return true if computer has info with id 1
  - **Description**: Checks if `has_info` method returns `true` for a computer with valid information (ID 1).
  - **Expected Result**: This should return `true`.

- **Test Name**: should return false if computer has info with id 5
  - **Description**: Checks if `has_info` method returns `false` for a computer without any information (ID 5).
  - **Expected Result**: This should return `false`.

## get_computer_colors Tests

- **Test Name**: should return an array of colors for computer with id 1
  - **Description**: Checks if `get_computer_colors` method returns the correct array of colors for the computer with ID 1.
  - **Expected Result**: This should return `['green', 'orange', 'red']`.

- **Test Name**: should return an empty array for a non-existent computer id
  - **Description**: Checks if `get_computer_colors` method returns an empty array for invalid or non-existent computer IDs (e.g., 999).
  - **Expected Result**: This should return an empty array `[]`.

## get_info Tests

- **Test Name**: should return the info object for computer with id 1
  - **Description**: Checks if `get_info` method returns the correct `info` object for the computer with ID 1.
  - **Expected Result**: This should return `{ comments: 'no comments', consumption: 'A', model: 'silver' }`.

- **Test Name**: should return null for a non-existent computer id
  - **Description**: Checks if `get_info` method returns `null` for invalid or non-existent computer IDs (e.g., 999).
  - **Expected Result**: The method should return `null`.

## get_total_price_of_computers_by_processor Tests

- **Test Name**: should return the total price of computers by processor
  - **Description**: Checks if `get_total_price_of_computers_by_processor` method returns the correct total price for all computers using the "X-Force" processor.
  - **Expected Result**: This should return `510`.

- **Test Name**: should throw an error if processor is not found
  - **Description**: Checks if `get_total_price_of_computers_by_processor` method throws an error when an invalid or non-existent processor is provided.
  - **Expected Result**: This should throw the error "nothing found with the given search value".