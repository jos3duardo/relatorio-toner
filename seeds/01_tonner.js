
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tonners').del()
    .then(function () {
      // Inserts seed entries
      return knex('tonners').insert([
        {id: 1, nome: 'rowValue1'},
        {id: 2, nome: 'rowValue2'},
        {id: 3, nome: 'rowValue3'}
      ]);
    });
};
