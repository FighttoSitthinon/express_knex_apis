//cli => knex seed:make {seed name}
//cli => knex seed:run

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'user1', password:'1234'},
        {id: 2, name: 'user2', password:'1234'},
        {id: 3, name: 'user3', password:'1234'},
      ]);
    });
};
