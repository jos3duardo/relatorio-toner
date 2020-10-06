const knex = require('../database')

module.exports = {

    async index (req, res) {
        const results = await knex('toners ')
            .join('servicos','toners.id', '=','servicos.toner_id')
            .select('*', knex.raw('SUM(servicos.quantidade) as quantidade, SUM(servicos.cilindro) as cilindros'))
            .groupBy('toners.modelo')
        console.log(results)
        return res.status(200).json(results)
    },

}