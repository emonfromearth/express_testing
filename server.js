const express = require('express');
const app = express();

// middleware for serving static files like html, css etc. just go to the route and see the file served.
// public is the naming convention for the folder where the static files are stored. but we can use anything we want.
app.use(express.static('public'));

// server running on port 3000
app.listen(3000)

// Set the view engine to ejs
app.set("view engine", "ejs");

// we can use middleware in individual routes also. and as many middleware as we want. 
// as any many time the same middleware can be used also.
app.get('/', (req, res) => {
    console.log('Hello World');
    // default folder for ejs is views. then we define the file name i;e index.ejs. 
    // then pass the data to the ejs file like- {text: "from server.js"} using render method.
    res.render("index", {text: "from server"});
    }
);

// in the ./routes/users.js file we have routes for users. there we have all the routes defined.
const usersRouter = require('./routes/users');

// 1st argument is the path, 2nd argument is the router. all routes in users.js will start with /users
app.use('/users', usersRouter);