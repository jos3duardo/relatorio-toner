const express = require('express')
const routes = express.Router()

const TonerController = require('./controllers/TonerController')

routes
    .get('/toner', TonerController.index)
    .get('/toner/:id', TonerController.show)
    .post('/toner', TonerController.create)
    .put('/toner/:id', TonerController.update)
    .delete('/toner/:id', TonerController.delete)
    .patch('/toner/:id', TonerController.contador)

module.exports = routes