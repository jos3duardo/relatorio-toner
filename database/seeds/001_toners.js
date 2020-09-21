
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('toners').del()
    .then(function () {
      // Inserts seed entries
      return knex('toners').insert([
        { modelo: '85A', marca: 'HP', tipo: 'toner', status: 'finalizado', recarga: 'ok', quantidade: 800 },
        { modelo: '85B', marca: 'SAMSUNG', tipo: 'toner', status: 'aguardando', recarga: 'ok', quantidade: 200 },
        { modelo: '85C', marca: 'XEROX', tipo: 'toner', status: 'finalizado', recarga: 'ok', quantidade: 150 },
        { modelo: '85D', marca: 'HP', tipo: 'toner', status: 'finalizado', recarga: 'ok', quantidade: 500 },
        { modelo: '85E', marca: 'KYOCERA', tipo: 'toner', status: 'aguardando', recarga: 'ok', quantidade: 550 },
        { modelo: '85F', marca: 'SAMSUNG', tipo: 'toner', status: 'finalizado', recarga: 'ok', quantidade: 320 },
        { modelo: '85G', marca: 'EPSON', tipo: 'toner', status: 'aguardando', recarga: 'ok', quantidade: 360 },
      ]);
    });
};
