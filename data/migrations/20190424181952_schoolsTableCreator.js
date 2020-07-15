
exports.up = function(knex, Promise) {
  return knex.schema.createTable('schools', tbl=>{
      tbl.increments();
      tbl.string('schoolName', 255).notNullable();
      tbl.string('address', 255);

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('schools');
};
