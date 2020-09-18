

exports.up = knex => knex.schema.createTableIfNotExists( 'servicos', table => {
    table.increments()
    table.string('nome')
    table.string('status')
    table.float('quantidade')

    table.integer('toner_id')
        .references('toners.id')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTableIfExists('servicos')
