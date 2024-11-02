<!-- HOMEWORK FROM EPISODE-03 -->

- Create a repository
- Initialise the repository
- node_modules, package.json, package-lock.json
- Install express
- Create a server
- Listen to port port 7777
- Write request handlers for /test, /hello
- Install nodemon and update scripts inside package.json

- What are dependencies

- What is the use of "-g" while npm install

- Difference between carat and tilde (^ and ~) in package.json installed packages verson
  (ANS)
  Use ^ when you want to allow minor and patch updates that add features and fix bugs but avoid breaking changes in major versions.
  Use ~ when you want to allow only patch updates, focusing solely on bug fixes and avoiding new features or minor changes.

<!-- HOMEWORK FROM EPISODE-04-->

(part-1)

- Initialize git
- .gitIgnore
- Create a remote repo on github
- Push all code to remote origin
- Play with routes and route extrensions ex. /hello , / , /hello/2 , /xyz
- Order of the routes matters alot

(Part-2)

- Install Postman app and make workspace/collection and make a test API call
- Write logic to handle GET, POST, PUT, DELETE, PATCH API calls and test them in postman
- Explore routing and use of ?, +, (), \* in the routes
- Use of regex in routes /a/ , /.\*fly$/
- Reading the query params in the routes
- Reading the query params in the routes
- Reading the dynamic routes

<!-- HOMEWORK FROM EPISODE-05-->

- Multiple route handlers and play with code
- next();
- next function and error along with res.send();
- app.use("/", rH, [rH2, rH3], rH4, rH5 )
- What is a middleware? Why do we need it?
- How express JS basically handles requests behind the scenes
- Difference app.use and use.all
- Write a dummy Auth middleware for admin
- Write a dummy Auth middleware for all user routes, except login (i.e; /user/login)
- Error handling using - app.use("/", (err, req, res, next) => {});

<!-- HOMEWORK FROM EPISODE-6 -->

(Part-1)

- Create a free cluster on MongoDB official website (mongo atlas)
- Install mongoose library
- Connect your application to the database "connection-url"/devTender
- Call the connectDB function and connect to database before starting application on 7777

(Part-2)

- Create a user schema
- Create a userSchema & User Model

(Part-3)

- Create POST /signup API to add data to database
- Push some documents using API calls from postman
- Error handling using try/catch

<!-- HOMEWORK FROM EPISODE-7 -->

(Part-1)

- JS Object vs JSON (difference between the two)

(Part-2)

- Add the express.json middleware to your app
- Make your signup API Dynamic to receive data from the end user

(Part-3)

- User.findOne with duplicate email ids, which object will be returned? i.e; the first added or later added

(Part-4)
API- Get user by email
API- Feed API- GET /feed - get all the users from the database
API- Get user by ID

(Part-5)

- Create a Delete User API
- Difference between Patch and Put

(Part-6)

- API- Update a User
- Explore the mongoose Documentation for Model Methods
- What are options in a Model.findOneAndUpdate method, explore more about it.
- API - Update the user with email ID

<!-- HOMEWORK FROM EPISODE-8 -->

(part-1)

- Explore schematype options from the documentation
- Add required, unique, lowercase, min, minlength, trim
- Add default
- Create a custom validate function for gender
- Improve the DB Schema- PUT all appropriate validations on each field in schema
- Add timestamps to the userSchema

(part-2)

- Add API level validations on Patch request and signup post API
- DATA SANITISATION: Add API validation for each field

(part-2)

- Install Validator
- Explore Validator library functions and use validator functions for password, email and url
- NEVER IN YOUR LIFE TRUST req.body , AS IT MAY CONTAIN MALLICIOUS DATA WHICH CAN HARM YOUR APPLICATION
