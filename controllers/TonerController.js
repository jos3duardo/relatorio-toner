const knex = require('../database')

module.exports = {

    async index (req, res) {
        const results = await knex('toners ')

        return res.status(200).json(results)
    },
    async create (req, res, next) {
        try{
            const { modelo, marca, tipo, status, recarga, quantidade } = req.body

            let toner = await knex('toners').insert(
                req.body
            )

            return res.status(201).json({data: 'Registro com id ' +toner + ' criado com sucesso'})

        } catch (error){
            next(error)
        }
    },
    async show (req, res, next) {
        try{

            const { id } = req.params

            let results = await knex('toners').where({id})

            return res.status(201).json(results)

        } catch (error){
            next(error)
        }
    },
    async update (req, res, next) {
        try{
            const { modelo, marca, tipo, status, recarga, quantidade } = req.body

            const { id } = req.params

            console.log(id)

            let toner = await knex('toners').update(
                req.body
            ).where({id})

            return res.status(201).json({data: 'Registro editado com sucesso'})

        } catch (error){
            next(error)
        }
    },
    async delete (req, res, next) {
        try{
            const { id } = req.params

            let toner = await knex('toners').where({id}).del()

            return res.status(201).json({data: 'Registro apagado com sucesso'})

        } catch (error){
            next(error)
        }
    },
    async contador(req, res, next) {
        try{
            const { numero } = req.body
            const { id } = req.params

            let toner = await knex('toners').where({id})

            // let quantidade = numero + toner.quantidade

            // let toner = await knex('toners').update(
            //     {quantidade}
            // ).where({id})

            console.log(toner)

            return res.status(201).json( toner)
            // return res.status(201).json({data: 'Registro editado com sucesso'})
        } catch (error){
            next(error)
        }
    }

}