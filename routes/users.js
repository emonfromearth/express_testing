const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users home");
});

router.post("/", (req, res) => {
  res.send("User create");
});

router
  .route("/:id", (req, res) => {
    res.send(`User data ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`User update ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`User delete ${req.params.id}`);
  });

module.exports = router;
