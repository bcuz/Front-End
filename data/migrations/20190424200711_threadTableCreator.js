exports.up = function(knex, Promise) {
  return knex.schema.createTable("threads", tbl => {
    tbl.increments();
    tbl.string("title", 255).notNullable();
    tbl
      .integer("bubl_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("bubl")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("student_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("students")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("threads");
};
