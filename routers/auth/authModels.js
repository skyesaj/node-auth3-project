const db = require("../../data/dbConfig");

function add(user) {
  return db("user")
    .insert(user, "id")
    .then(log => {
      const [id] = log;
      return db("user")
        .where({ id })
        .first();
    });
}

module.exports = {
  //   findById,
  //   find,
  //   findBy,
  add
};
