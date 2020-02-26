const router = require("express").Router();

const user = require("./userModel");

router.get("/", (req, res) => {
  user
    .get()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json({ error: "no" });
    });
});

module.exports = router;
