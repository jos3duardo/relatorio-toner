const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()
app.use(express.json() )
app.use(routes)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//not found
app.use((req,res,next) => {
    const error = new Error('Não encontrado')

    error.status = 404

    next(error)

})

//catch all
app.use((error,req,res,next) => {
    res.status(error.status || 500)
    res.json({error: error.message})
})

app.listen(3000, () => console.log('servidor rodando na porta 3000'))


