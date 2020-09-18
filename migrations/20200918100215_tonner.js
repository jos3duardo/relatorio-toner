
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('tonners', table => {
      table.increments()
      table.string('nome')
  })
};

exports.down = function(knex) {
  return knex.schema.dropSchemaIfExists('tonners')
};
