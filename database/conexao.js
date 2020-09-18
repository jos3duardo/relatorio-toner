const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 14001,
    user: 'root',
    password: 'root',
    database: 'tonner'
})

module.exports = conexao