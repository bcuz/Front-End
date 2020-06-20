exports.up = function(knex, Promise) {
  return knex.schema.createTable("bubl", tbl => {
    tbl.increments();
    tbl.string("bublName", 255).notNullable().unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("bubl");
};
