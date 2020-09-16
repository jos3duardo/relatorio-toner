const Sequelize = require('sequelize')
const sequelize = new Sequelize('toner','root','',{
    host:"localhost",
    dialect:'mysql'
})


sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("falaha ao se conectar"+erro)

})

const Postagem = sequelize.define('tipotoner',{
    modelo:{
        type:Sequelize.STRING
    },
    marca:{
        type: Sequelize.Text
    },

    qntToner:{
        type:Sequelize.FLOAT
    }
})

Postagem.sync({force:true})