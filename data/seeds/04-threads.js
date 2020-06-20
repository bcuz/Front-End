
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('threads').del()
    .then(function () {
      // Inserts seed entries
      return knex('threads').insert([
        {id: 1, title: "I cant wait for detective pikachu", bubl_id: 1, student_id:3,},
        {id: 2, title: 'what is 1 + 1', bubl_id: 2, student_id:1,},
        {id: 3, title: 'the french opening', bubl_id: 3, student_id:2,}
      ]);
    });
};
