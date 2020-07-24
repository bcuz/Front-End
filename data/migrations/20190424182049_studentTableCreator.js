exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", tbl => {
    tbl.increments();
    tbl.string("username", 255).notNullable();
    tbl.string("firstName", 255);
    tbl.string("lastName", 255);
    tbl.integer("age");
    tbl.integer('school_id').unsigned()
    tbl
      .foreign("school_id")
      .references("id")
      .inTable("schools")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.string("password", 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("students");
};
