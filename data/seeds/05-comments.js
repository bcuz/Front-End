
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  // return knex('comments').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, comments:" I hope they have a deadpool referance ", school_id: 1, student_id: 2, bubl_id: 1, thread_id:1},
        {id: 2, comments:" are you serious?", school_id: 4, student_id: 3, bubl_id: 2, thread_id:2},
        {id: 3, comments:" is so over rated ", school_id: 2, student_id: 2, bubl_id: 3, thread_id:3},
        {id: 4, comments:" thats my favorite opening ", school_id: 4, student_id: 3 , bubl_id: 3, thread_id:3}
      ]);
    // });
};
