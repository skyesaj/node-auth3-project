const db = require("../../data/dbConfig");

function get() {
  return db("user");
}

module.exports = {
  get
};
