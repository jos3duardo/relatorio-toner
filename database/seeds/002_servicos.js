
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('servicos').del()
    .then(function () {
      // Inserts seed entries
      return knex('servicos').insert([
        {nome: 'recarga', status: 'finalizado', quantidade: 100.5, toner_id: 1},
        {nome: 'troca de silindro', status: 'aguardando', quantidade: 1, toner_id: 2},
        {nome: 'recarga', status: 'finalizado', quantidade: 100.5, toner_id: 3},
        {nome: 'recarga', status: 'finalizado', quantidade: 100.5, toner_id: 4},
        {nome: 'recarga', status: 'finalizado', quantidade: 100.5, toner_id: 5},
        {nome: 'recarga', status: 'finalizado', quantidade: 100.5, toner_id: 6},
        {nome: 'recarga', status: 'finalizado', quantidade: 100.5, toner_id: 7},
      ]);
    });
};
