## Deployed App

Check out the live version of the app: https://shiny-alfajores-6d41e2.netlify.app/


# CRUD App Documentation

This documentation provides an overview of a CRUD (Create, Read, Update, Delete) web application developed using HTML, Bootstrap, and JavaScript. The application is designed to manage user data through an interactive web interface.

## Files and Structure

The application consists of several HTML, JavaScript, and CSS files organized as follows:

- **index.html**: This is the main page of the application that displays the list of users in a table format.
- **create.html**: This page provides a form to create a new user.
- **view.html**: This page allows users to view and edit user details.
- **index.js**: Contains JavaScript code to fetch and display user data in the table on the index.html page.
- **create.js**: Handles the user creation process and form submission on the create.html page.
- **view.js**: Manages the functionality for viewing and editing user details on the view.html page.

## User Interface

### index.html

- The main page that displays the list of users in a table.
- Users' data including name, email, mobile, gender, city, and active status are shown.
- Each row contains "Edit" and "Delete" buttons to perform respective actions.
- The "Edit" button redirects to the view.html page to view and edit user details.
- The "Delete" button triggers a confirmation prompt and deletes the user upon confirmation.

### create.html

- A form to create a new user with fields for name, email, mobile, gender, and city.
- "Submit" button to add a new user to the list.
- Navigation links to the Home page (index.html) and the Create page (create.html) in the navbar.

### view.html

- Allows viewing and editing of user details.
- Displays form fields for each user attribute.
- Users can edit the details and submit the form to update the user data.
- Navigation links to the Home page (index.html) and the Create page (create.html) in the navbar.

## JavaScript Functionality

### index.js

- Fetches user data from a mock API using the `fetch` API.
- Constructs the table on the index.html page dynamically with user data.
- Handles the toggling of the active status of users using a checkbox.
- Provides "Edit" and "Delete" buttons to manage user data.

### create.js

- Listens for form submission on the create.html page.
- Collects user input from the form fields.
- Sends a POST request to the mock API to add a new user.
- Redirects the user to the Home page after successful submission.

### view.js

- Retrieves the user ID from the URL parameters.
- Fetches user data for the specified ID from the mock API.
- Populates the form fields with user data for viewing and editing.
- Listens for form submission to update user details.
- Redirects the user to the Home page after successful submission.

## CSS Styling

- The application uses Bootstrap for responsive design and styling.
- The "switch" class is used to create toggle switches for user activation status.

## Conclusion

This CRUD application showcases the fundamental operations of creating, reading, updating, and deleting user data through a user-friendly web interface. It utilizes HTML, Bootstrap for styling, and JavaScript for interactivity, making it a versatile example of a simple data management system.
