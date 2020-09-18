module.exports = app => {
    app.get('/atendimento', (req, res) =>
        res.send('Servidor Rodando, tudo ok')
    )

    app.post('/atendimento', (req,res) =>{
        console.log(req.body)
        res.send('teste post')
    })
}