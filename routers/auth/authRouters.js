const router = require("express").Router();
const crypt = require("bcryptjs");

const auth = require("./authModels");

router.post("/register", (req, res) => {
  const userData = req.body;
  if (userData.username && userData.password && userData.department) {
    const hash = crypt.hashSync(userData.password, 8);
    userData.password = hash;
    auth
      .add(userData)
      .then(users => {
        res.status(201).json(users);
      })
      .catch(error => {
        res.status(400).json({ error: " cant be registerd" });
      });
  } else {
    res.status(400).json({ error: " missing" });
  }
});

module.exports = router;
