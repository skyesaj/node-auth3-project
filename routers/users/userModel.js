const db = require("../../data/dbConfig");

function get() {
  return db("user");
}
function getByDep(dep) {
  return db("user").where({ department: dep });
}

module.exports = {
  get,
  getByDep
};
