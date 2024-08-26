# Project

This is a Zippia JavaScript Test - Comprehensive User Management Dashboard.

The application is part of a set of interviews conducted by Zippia, where I needed to develop an application based on the given briefing in the Doc folder.

# Features developed

- Custom Hooks

-- useFilter: Filter data within the table component

-- useModalFilter: Filter user data to show in a modal

-- useQuery: Request the data in the API

-- useSort: Sort the user data in the table header both by ASC or DESC

-- useTable: Manipulate the initial data shown in the table for the user

- Components

-- Header: Basic header with logo and text

-- Message: Show a message based on the status code from the request

-- Modal: Display user complement data by user request

-- Search: Component that holds input filter and button fetch

-- Table: The table used to show all fetched data

-- Footer: Basic footer with logo and text

# Notes

• This project uses a basic context based on the Zustand library.

• Instanced a loading handle with a timeout, because the API request is fast, where it wouldn't show the loader otherwise.

Regardless of the outcome, thank you very much for the opportunity. I've enjoyed working on it :)

## Instructions to run

All that is required, is to run a yarn command in the root folder and then yarn dev to run locally.

```
At the root folder:
yarn

After the dependencies installation:
yarn dev
```