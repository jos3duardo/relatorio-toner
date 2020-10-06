const knex = require('../database')

module.exports = {
    async index (req, res) {

        const results = await knex('servicos ')

        return res.status(200).json(results)
    },
    async create (req, res, next) {
        try{
            const { nome, toner_id, status, cilindro, quantidade } = req.body

            let servoco = await knex('servicos').insert(
                req.body
            )

            return res.status(201).json({data: 'Registro com id ' +servoco + ' criado com sucesso'})

        } catch (error){
            next(error)
        }
    },
    async show (req, res, next) {
        try{

            const { id } = req.params

            let results = await knex('servicos').where({id})

            return res.status(201).json(results)

        } catch (error){
            next(error)
        }
    },
    async update (req, res, next) {
        try{
            const { modelo, marca, tipo, status, recarga, quantidade } = req.body
            const { id } = req.params

            let servoco = await knex('servicos').update(
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

            let servoco = await knex('servicos').where({id}).del()

            return res.status(201).json({data: 'Registro apagado com sucesso'})

        } catch (error){
            next(error)
        }
    },
    async contador(req, res, next) {
        try{
            const { numero } = req.body
            const { id } = req.params

            let servoco = await knex('servicos').where({id})

            // let quantidade = numero + servoco.quantidade

            // let servoco = await knex('servicos').update(
            //     {quantidade}
            // ).where({id})

            console.log(servoco)

            return res.status(201).json( servoco)
            // return res.status(201).json({data: 'Registro editado com sucesso'})
        } catch (error){
            next(error)
        }
    }

}