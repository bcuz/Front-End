
exports.up = function(knex, Promise) {
    return knex.schema.createTable("comments", tbl => {
        tbl.increments();
        tbl.text('comments').notNullable()
        tbl
          .integer("school_id")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("schools")
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
        tbl
          .integer("bubl_id")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("bubl")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        tbl
          .integer("thread_id")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("threads")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("comments");
};
