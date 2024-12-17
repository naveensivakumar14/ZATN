# ZATN - Backend Development Bootcamp
Schedule Overview
November 15 to December 31

# Class 1 : 15-11-2024: Introduction to JavaScript

Overview of JavaScript basics.
Setting up the environment.
Understanding variables, data types, and control structures.

#  Class 2 : 16-11-2024: ES6 Basics

Key ES6 features:
Functions: Regular, anonymous, and arrow functions.
Callback Functions: Understanding asynchronous JavaScript.
Array Methods: map(), filter(), and their applications.
Spread and Rest Operators: Simplifying array and object manipulation.
indexOf: Locating elements in arrays.
Modules: import and export.

#  Class 3 : 17-11-2024: File System with Node.js

Introduction to Node.js and its architecture.
Exploring the Node.js File System (fs) module:
Reading and writing files.
File manipulation and directory operations.
Practical examples and hands-on coding.

#  Class 4 : 18-11-2024: File System with Node.js Practice

Working with the fs module to read and write files.
They perform file operations such as creating, deleting, and renaming files.
Task - 18-11-2024
//agelesserthan18  -  './teenage.json'
//ageGreaterthen18 - './senior.json'
//nameStartsWithN  - './n.json'
//nameGreaterthen4 - './four.json'
//male  - './male.json'
//female - './female.json'

#  Class 5 : 19-11-2024: Creating an HTTP server using Node.js

Understanding the HTTP module and its role in building servers.
Setting up a basic HTTP server to handle client requests and responses.
Exploring routes and status codes for handling different types of requests.
Implementing a simple server to send HTML content or JSON responses.


#  Class 6 : 20-11-2024: Creating an HTTP server and URL, nodemon package to create a Calculator using Node.js

Setting up an HTTP server to handle client requests and responses using Node.js.
Parsing and managing URLs to handle different routes for calculator operations.
Installing and using the Nodemon package for automatic server restarts during development.
Building a basic calculator application to perform addition, subtraction, multiplication, and division operations.

#  Class 7 : 21-11-2024: Creating Routes Using Express JS

Introduction to Express JS
Understanding the Express.js framework and its advantages for building web applications.
Setting up and defining routes for handling various HTTP methods (GET, POST, etc.).
We are implementing dynamic routing to handle parameters and queries.
Building a simple application with multiple API endpoints using Express.js.

#  Class 8 : 25-11-2024: CRUD get routes, Thunder client testing using express js

Understanding CRUD Operations: Learned about creating GET routes in Express.js to retrieve data from the server.
Dynamic Route Parameters: We explored handling dynamic and query-based routes for better data filtering.
Thunder Client Testing: Practised testing APIs using Thunder Client to validate GET route responses.
Error Handling: Implemented proper error handling techniques for invalid or missing data requests in Express.js.

# Class 9: 26-11-2024: CRUD Operations and Thunder Client Testing in Express.js

CRUD Operations Overview: Gained a comprehensive understanding of implementing all CRUD operations (GET, POST, PUT, DELETE) in Express.js.
POST Route for Data Creation: Learned to set up POST routes to add new data and handle JSON request payloads in Express.js.
PUT Route for Data Updates: Created PUT routes to update existing data by ID or specific criteria.
DELETE Route for Data Deletion: Explored the DELETE route to remove data and implement checks for non-existent resources safely.
Thunder Client for API Testing: Validated CRUD operations using Thunder Client and analyzed API responses for success and error cases.

# Class 10: 27-11-2024: To-do CRUD Express JS

Creating a To-Do List with Express.js: Developed a basic To-Do list application backend using Express.js.
CRUD Operations Integration: Implemented Create, Read, Update, and Delete functionalities for managing To-Do tasks.
Working with data.json: I learned how to use a data.json file as a local database to store and manipulate To-Do list data.
Dynamic Routes for To-Do Management: Created routes for task-specific operations, such as fetching, updating, or deleting tasks by ID.
Data Persistence with JSON: Explored reading from and writing to the data.json file to ensure task data persists between requests.

# Class 11: 28-11-2024 : Promises and CRUD operations

Introduction to Promises: Gained an understanding of JavaScript Promises, including how to handle asynchronous operations effectively.
Promise States and Methods: Explored the states of Promises (Pending, Fulfilled, Rejected) and methods like then(), catch(), and finally() for chaining and error handling.
Integrating Promises with CRUD: Used Promises to handle asynchronous file operations (e.g., reading and writing to data.json) while building a To-Do list application.
Improving CRUD Functionality: Enhanced To-Do list CRUD operations by ensuring non-blocking code execution using Promises.
Error Handling with Promises: Handling errors gracefully during Create, Read, Update, and Delete operations using catch() blocks.

# Class 12: 29-11-2024: MonogoDB CRUD and Database connectivity using Express JS

• Connecting MongoDB with Express.js: I learned how to establish a connection between an Express.js application and a MongoDB database using the Mongoose library.
• Schemas and Models: I explored creating MongoDB schemas and models to define the structure of database documents for CRUD operations.
• Implementing MongoDB CRUD: Built Create, Read, Update, and Delete (CRUD) functionalities to interact with MongoDB collections.
• Data Validation and Middleware: Used Mongoose validation and middleware to ensure data integrity during CRUD operations.
• Testing MongoDB with Express: Tested CRUD routes connected to MongoDB using Thunder Client to verify API behaviour and database interactions.

# class 13: 1-12-2024 Todo list MongoDB connectivity

• Connecting Express.js to MongoDB: Established a database connection for the To-Do list application using Mongoose and MongoDB.
• CRUD Operations with MongoDB: Implemented Create, Read, Update, and Delete operations to manage tasks in the To-Do list.
• Schema and Model Creation: Defined a schema for To-Do tasks and created a Mongoose model to interact with the database.
• Database Testing: Tested database interactions and verified the functionality of CRUD routes using Thunder Client.

# class 14: 2-12-2024 Middleware "Functions that process requests between client and server"

• Introduction to Middleware: Learned about middleware functions in Express.js and their role in request-response cycles.
• Types of Middleware: Explored built-in, third-party, and custom middleware for handling tasks like logging, authentication, and parsing data.
• Middleware Chaining: Practised chaining multiple middleware functions for processing requests sequentially.
• Error-Handling Middleware: Implemented custom error-handling middleware to catch and manage errors globally.

# class 15: 3-12-2024 Nodemailer

• Setting Up Nodemailer: Configured Nodemailer in an Express.js app to send emails using SMTP and other transport methods.
• Sending Emails Programmatically: Learned how to compose and send emails dynamically with custom subjects, recipients, and content.
• HTML and Attachment Support: Added support for sending emails with HTML content and attachments.
• Error Handling in Email Sending: Handled errors gracefully, such as invalid email addresses or SMTP connection issues.

# class 16: 4-12-2024 Authentication singup, sign in routes

# class 17: 5-12-2024 Authorisation JWT, Cookies

# class 18: 6-12-2024 OTP verification using nodemailer

# class 19: 7-12-2024 Authentication for user login verify

# class 20: 9-12-2024 Multer HTML CSS , CORS to get and store the file in the backend folder

# class 21: 10-12-2024 CRUD app using HTML form submission to post and get data on the backend and store into MongoDB

# class 22: 11-12-2024 React JS introduction, project setup, basic react components

# class 23: 12-12-2024 React Components, Form submission and backend integration
cmd: npm i express cors mongoose nodemon

# class 24: 13-12-2024 Git, Github version control

# class 25: 14-12-2024 Github working with branch

• folk or copy code from the main branch of the repository
• working on the code and pushing into own branch ( git push origin reyroi)
• making pull requests to the main branch

# class 26: 15-12-2024 MySQL workbench db queries and connecting MySQL database into backend server.

• Practicing MySQL queries at the beginner level.
• CRUD Operation using MySQL database

# class 27: 16-12-2024 Socket.io for chat application project 

cmd: npm i socket.io

• Basic understanding of server-side rendering
• Understanding the basic workflow of socket.io
• Connect the backend with socket.io to emit the user-msg on the client

# class 28: 17-12-2024 MVC Pattern Model view controller

• Understanding MVC: Separation of application logic into Model, View, and Controller.
• Model: Handles database structure and data management.
• Controller: Manages incoming requests and processes responses


 







