const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  const hash = bcrypt.hashSync('in', 10);

  return knex("students")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert([
        {
         
          username: "bobthebuilder",
          firstName: "Robert",
          lastName: "Builder",
          age: 12,
          school_id: 1,
          password: hash
        },
        {
         
          username: "winterIsComing",
          firstName: "Jon",
          lastName: "Snow",
          age: 11,
          school_id: 2,
          password: hash
        },
        {
          
          username: "lambdaElite",
          firstName: "Andrew",
          lastName: "Ogle",
          age: 33,
          school_id: 4,
          password: hash
        }
      ]);
    });
};
