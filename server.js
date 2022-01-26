const express = require('express');
const app = express();

// Set the view engine to ejs
app.set("view engine", "ejs");

app.listen(3000)

app.get('/', (req, res) => {
    console.log('Hello World');
    // default folder for ejs is views. then we define the file name i;e index.ejs. 
    // then pass the data to the ejs file like- {text: "from server.js"} using render method.
    res.render("index", {text: "from server"});
    }
);
