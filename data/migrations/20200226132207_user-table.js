exports.up = function(knex) {
  return knex.schema.createTable("user", user => {
    user.increments();

    user
      .text("username", 128)
      .notNullable()
      .unique()
      .index();
    user.text("password").notNullable();
    user.text("department", 128).notNullable();
  });
};

exports.down = function(knex, promise) {
  return knex.schema.dropTableIfExists("user");
};
