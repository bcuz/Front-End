
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schools').del()
    .then(function () {
      // Inserts seed entries
      return knex('schools').insert([
        {id: 1, schoolName: 'Bayside Elementry', address:'1322 13th street'},
        {id: 2, schoolName: 'Central Elementry', address:'1920 holly'},
        {id: 3, schoolName: 'Mar Vista Middle', address:'422 B st'},
        {id: 4, schoolName: 'Lambda School', address:'online'}
      ]);
    });
};
