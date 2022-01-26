const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users home");
});

router.post("/", (req, res) => {
  res.send("User create");
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
