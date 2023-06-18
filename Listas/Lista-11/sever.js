const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectionString = ''
const port = 8080

app.use(express.json())

app.get('/listar-produtos', async (req, res) => {
    try {
        let produtos = await Produto.find()
        return res.status(200).json(produtos)
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.get('/listar-funcionarios', async (req, res) => {
    try {
        let funcionarios = await Funcionario.find()
        return res.status(200).json(funcionarios)
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.post('/cadastrar-produtos', async (req, res) => {
    try {
        let produtos = await Funcionario.find()
        return res.status(200).json(funcionarios)
    } catch (error) {
        return res.status(500).json(error)
    }
})



mongoose.connect(connectionString, {
    dbName: "DEVSSHOP"
}).then(() => {
    console.log('MONGODB UP!')
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})