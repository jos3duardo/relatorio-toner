class Tabelas {
    init(conexao){
        this.conexao = conexao

        this.criarAtendimentos()
    }

    criarAtendimentos(){
        const sql = `
                CREATE TABLE IF NOT EXISTS Atendimentos (
                    id int NOT NULL AUTO_INCREMENT, 
                    tipo varchar(255) NOT NULL,
                    modelo varchar(255) NOT NULL,
                    marca varchar(255) NOT NULL,
                    data datetime NOT NULL,
                    created_at datetime,
                    updated_at datetime,
                    primary key(id)
                )`
        this.conexao.query(sql, (erro) => {
            if (erro){
                console.log(erro)
            }
            console.log('tabela criada')
        })
    }
}

module.exports = new Tabelas