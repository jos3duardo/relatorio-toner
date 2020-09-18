const express = require('express')
const routes = express.Router()

const TonerController = require('./controllers/TonerController')

routes.get('/toner', TonerController.index)
routes.get('/toner/:id', TonerController.show)
routes.post('/toner', TonerController.create)
routes.put('/toner/:id', TonerController.update)
routes.delete('/toner/:id', TonerController.delete)

module.exports = routes