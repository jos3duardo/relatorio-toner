
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('servicos').del()
    .then(function () {
      // Inserts seed entries
      return knex('servicos').insert([
        {nome: 'recarga', status: 'finalizado', quantidade: 100.5, toner_id: 1, cilindro:'0'},
        {nome: 'troca',   status: 'aguardando', quantidade: 1,     toner_id: 2, cilindro:'0'},
        {nome: 'recarga', status: 'finalizado', quantidade: 100.5, toner_id: 3, cilindro:'0'},
        {nome: 'recarga', status: 'finalizado', quantidade: 100.5, toner_id: 4, cilindro:'0'},
        {nome: 'recarga', status: 'finalizado', quantidade: 100.5, toner_id: 5, cilindro:'0'},
        {nome: 'recarga', status: 'finalizado', quantidade: 100.5, toner_id: 6, cilindro:'0'},
        {nome: 'recarga', status: 'finalizado', quantidade: 100.5, toner_id: 7, cilindro:'0'},
      ]);
    });
};
