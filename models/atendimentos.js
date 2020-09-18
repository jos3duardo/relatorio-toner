const moment = require('moment')
const conexao = require('../database/conexao')

class Atendimentos{

    adiciona(atendimento, res) {
        const created_at = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        const antendimentoCreatedAt = {...atendimento, created_at, data}

        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, antendimentoCreatedAt, (erro, resultado) => {
            if (erro){
                res.status(400).json(erro)
            }
            res.status(201).json(atendimento)
        })

    }

    listar(res){
        const sql = 'SELECT * FROM Atendimentos'

        conexao.query(sql,(erro, resultado) => {
            if (erro){
                res.status(400).json(erro)
            }

            res.status(200).json(resultado)

        })
    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM Atendimentos WHERE id = ${id}`

        conexao.query(sql, (erro, resultado) => {
            if (erro){
                res.status(400).json(erro)
            }

            const atendimento = resultado[0]
            res.status(200).json(atendimento)
        })
    }

    alterar (id, valores, res){

        if (valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        }

        const sql = ` UPDATE Atendimentos SET ? WHERE id = ?`

        conexao.query(sql, [valores, id], (erro, resultado) => {
            if (erro){
                res.status(400).json(erro)
            }
            res.status(200).json({...valores, id})
        })
    }

    deletar (id, res){
        const sql = `DELETE FROM Atendimentos WHERE id = ${id}`

        conexao.query(sql, (erro, resultado) => {
            if (erro){
                res.status(400).json(erro)
            }
            res.status(200).json({id})
        })
    }
}

module.exports = new Atendimentos