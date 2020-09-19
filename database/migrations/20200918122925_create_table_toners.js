
exports.up = knex => knex.schema.createTableIfNotExists( 'toners', table => {
        table.increments()
        table.string('modelo')
        table.string('marca')
        table.string('tipo')
        table.string('status')
        table.string('recarga')
        table.bigInteger('quantidade')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
  })

exports.down = knex => knex.schema.dropTableIfExists('toners')
