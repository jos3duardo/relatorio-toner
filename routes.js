const express = require('express')
const routes = express.Router()

const TonerController = require('./controllers/TonerController')

routes.get('/toner', TonerController.index)

module.exports = routes