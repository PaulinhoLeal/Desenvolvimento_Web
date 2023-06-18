const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 8060
const connectionString = "mongodb+srv://admin:admin123@apidatabase.2wmghdn.mongodb.net/"
const Animal = require('./models/animal')

app.use(express.json())

// ENDPOINT
app.get('/listar-animais', async (req, res) => {
    try {
        let animais = await Animal.find()
        return res.status(200).json(animais)
    } catch (error) {
        return res.status(500).json(error)
    }
})

//ENDPOINT
app.post('/adicionar-animais', async (req, res) => {
    let { nome, raca, idade } = req.body
    let animal = {
        nome, raca, idade
    }
    
    try {
        await Animal.create(animal)
        return res.status(201).json({ message: 'produto cadastrado com sucesso' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})



mongoose.connect(connectionString, {
    dbName: "PET_SHOP"
}).then(() => {
    console.log('MONGODB UP!')
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})

