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
