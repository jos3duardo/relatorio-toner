const express = require('express')
const routes = express.Router()

const TonerController = require('./controllers/TonerController')
const ServicoController = require('./controllers/ServicoController')
const RelatorioController = require('./controllers/RelatorioController')

routes
    .get('/toner', TonerController.index)
    .get('/toner/:id', TonerController.show)
    .post('/toner', TonerController.create)
    .put('/toner/:id', TonerController.update)
    .delete('/toner/:id', TonerController.delete)
    .patch('/toner/:id', TonerController.contador)

    .get('/servicos',ServicoController.index)
    .get('/servicos/:id',ServicoController.show)
    .post('/servicos',ServicoController.create)
    .put('/servicos/:id',ServicoController.update)
    .delete('/servicos/:id',ServicoController.delete)

    .get('/relatorio', RelatorioController.index)

module.exports = routes