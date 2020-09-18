const customExpress = require('./config/customExpress')

const conexao = require('./database/conexao')

conexao.connect( (erro) => {
       if (erro) {
           console.log(erro)
       }else{
           console.log('conectado no banco com sucesso')

           const app = customExpress()

           app.listen(3000, () => console.log('servidor rodando na porta 3000'))

       }
})


