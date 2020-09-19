const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(express.json() )
app.use(routes)
app.use(cors())

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

app.listen(3001, () => console.log('servidor rodando na porta 3000'))


