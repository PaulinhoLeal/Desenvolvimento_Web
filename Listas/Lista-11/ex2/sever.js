const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectionString = "mongodb+srv://admin:admin123@apidatabase.2wmghdn.mongodb.net/"
const port = 8080
const Produto= require("./models/produto")
const Funcionario = require("./models/funcionario")

app.use(express.json())

app.get('/listar-produtos', async (req, res) => {
    try {
        let produtos = await Produto.find()
        return res.status(200).json(produtos)
    } catch (error) {
        return res.status(500).json(error)
    }
})

app.post('/cadastrar-produtos', async (req, res) => {
    let {nome,descricao,valor,emEstoque,publicadoEm}=req.body
    let produtos = {nome,descricao,valor,emEstoque,publicadoEm}
    try {
         await Produto.find()
        return res.status(201).json({message:"produto cadastrado com sucesso"})
    } catch (error) {
        return res.status(500).json({message:error.message})
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

app.post('/cadastrar-funcionario', async (req, res) => {
    let {nome,cargo,funcional,admitodEm}=req.body
    let funcionarios =  {nome,cargo,funcional,admitodEm}
    try {
        await Funcionario.find()
        return res.status(201).json({message: "funcionario cadastrado com sucesso"})
    } catch (error) {
        return res.status(500).json({message:error.message})
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