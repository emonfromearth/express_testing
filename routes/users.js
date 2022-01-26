const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users list");
});

router.get("/new", (req, res) => {
  // rendered a from from static/views/users/new.ejs and then posted the data to the server.
  res.render("users/new", {firstname: "your name here"});
});

router.post("/", (req, res) => {
  console.log(req.body.firstname);
  // show the data from previous submitted from
  res.send(`User created with name ${req.body.firstname}`);
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`User data ${req.user}`);
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
