# react-data-list-table-hrnet

A customizable React component library for rendering sortable and paginated tables, designed for ease of integration and extensive customization.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Example](#example)

## Installation

To install the library, you can use npm  :

```bash
npm i react-datas-list-table-hrnet
```
## Usage

To use react-datas-list-table-hrnet in your project, import the component and pass the required props. Here's a basic example:

```jsx
import React from 'react';
import DatasListTable from 'react-datas-list-table-hrnet';

function App() {
    const items = [
        // Your items data
    ];
    const columnConfigs = [
        { key: 'firstData', title: 'First Name' },
        { key: 'secondData', title: 'Last Name' },
        { key: 'selectDate', title: 'Start Date' },
        { key: 'seventhData', title: 'Department' },
        { key: 'selectDate2', title: 'Date of Birth' },
        { key: 'fieldsetValue.thirdData', title: 'Street' },
        { key: 'fieldsetValue.fourthData', title: 'City' },
        { key: 'fieldsetValue.fifthData', title: 'State' },
        { key: 'fieldsetValue.sixthData', title: 'Zip Code' }
    ];

    return (
        <DatasListTable items={items} columnConfigs={columnConfigs} />
    );
}

export default App;
```
## Props
- `items`: An array of objects that represents the data you want to display.
- `columnConfigs`: Configuration for the columns, including keys and titles for headers.
- `initialSortKey`: Initial key to sort by (default is 'defaultKey').
- `initialSortDirection`: Initial direction for sorting (can be 'ascending' or 'descending').
- `initialPageSize`: Number of items to display per page (default is 10).
  
## Example

Here is an example of how to use DatasListTable with dynamic data fetched from an API and custom configuration:
```jsx
import React, { useEffect, useState } from 'react';
import DatasListTable from 'react-datas-list-table-hrnet';
import axios from 'axios';

function EmployeeTable() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('https://api.example.com/employees')
            .then(response => setEmployees(response.data))
            .catch(error => console.error('Error fetching employees', error));
    }, []);

    const columnConfigs = [
        { key: 'firstName', title: 'First Name' },
        { key: 'lastName', title: 'Last Name' },
        { key: 'startDate', title: 'Start Date' },
        { key: 'department', title: 'Department' },
        { key: 'dateOfBirth', title: 'Date of Birth' },
        { key: 'street', title: 'Street' },
        { key: 'city', title: 'City' },
        { key: 'state', title: 'State' },
        { key: 'zipCode', title: 'Zip Code' }
    ];

    return (
        <DatasListTable items={employees} columnConfigs={columnConfigs} />
    );
}

export default EmployeeTable;
```
## Repository

You can find the source code and contribute to the development of this library at our [GitHub repository](https://github.com/Lokikun5/react-datas-list-tableOC).

Feel free to fork, star, and contribute! If you find any issues or have suggestions, please open an issue on the GitHub page.
