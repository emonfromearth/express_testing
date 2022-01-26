const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users list");
});

router.get("/new", (req, res) => {
  // rendered a from from static/views/users/new.ejs and then posted the data to the server. 
  // second parameter {firstname: "your name here"} is the data to be passed to the ejs file.
  res.render("users/new", {firstname: "your name here"});
});

router.post("/", (req, res) => {
  const isValid = false;
  if (isValid) {
    users.push({firstname: req.body.firstname});
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log('Error');
    // second parameter {firstname: req.body.firstname} will be populate again in the form after error occurs. a good practice for UX.
    res.render("users/new", {firstname: req.body.firstname});
  }

});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`User data ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`User update ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`User delete ${req.params.id}`);
  });

const users = [{name: "John"}, {name: "Sara"}];
  
// param is middleware. it runs in the middle of user sent the request and the response is sent back to the user.
router.param("id", (req, res, next, id) => {
  req.user = users[id];
    next();
});



module.exports = router;
