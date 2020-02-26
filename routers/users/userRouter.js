const router = require("express").Router();

const user = require("./userModel");

router.get("/", (req, res) => {
  //   user
  //     .get()
  //     .then(user => {
  //       res.status(200).json(user);
  //     })
  //     .catch(error => {
  //       res.status(500).json({ error: "no" });
  //     });
  // });
  if (req.user.user_department === "admin") {
    user
      .get()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => {
        res.status(500).json({ errorMessage: err.message });
      });
  } else {
    user
      .getByDep(req.user.user_department)
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  }
});

module.exports = router;
