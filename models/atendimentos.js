const moment = require('moment')


class Atendimentos{

    adiciona(atendimento, res) {
        const created_at = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        const antendimentoCreatedAt = {...atendimento, created_at, data}

        const sql = 'INSERT INTO Atendimentos SET ?'


    }

    listar(res){
        const sql = 'SELECT * FROM Atendimentos'


    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM Atendimentos WHERE id = ${id}`

    }

    alterar (id, valores, res){

        if (valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        }

        const sql = ` UPDATE Atendimentos SET ? WHERE id = ?`


    }

    deletar (id, res){
        const sql = `DELETE FROM Atendimentos WHERE id = ${id}`


    }
}

module.exports = new Atendimentos