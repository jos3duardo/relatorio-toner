const express = require('express')
const consign = require('consign')
const bodyParse = require('body-parser')

module.exports = () => {
    const app = express()

    app.use(bodyParse.urlencoded({extended: true}))
    app.use(bodyParse.json())

    consign()
        .include('controllers')
        .into(app)

    return app
}
