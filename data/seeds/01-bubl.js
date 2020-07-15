
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // return knex('bubl').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('bubl').insert([
        {id: 1, bublName: 'pokemon'},
        {id: 2, bublName: 'math'},
        {id: 3, bublName: 'chess'},
        {id: 4, bublName: 'coding'},
        {id: 5, bublName: 'video games'},
        {id: 6, bublName: 'football'}
      ]);
    // });
};
