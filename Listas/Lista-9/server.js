const express = require("express")
const app = express()
const port = 9000
const mongoose = require('mongoose')
const connectionString = "mongodb+srv://admin:adminadmin123@apidatabase.2wmghdn.mongodb.net/"
const bebida=require('./model/bebidas/')
const lanche= require('./model/laches')

app.use(express.json())

app.get("/listar-bebidas", async(req,res)=>{
    try{
        let bebidas = await bebida.find()
        return res.status(200).json(bebidas)
    }catch (error){
        return res.status(500).json(erro) 
    }
    
})

app.post('/cadastrar-bebidas', async(req,res)=>{
    try{
        let bebidas = await bebida.find()
        return res.status(201).json(bebidas)
    }catch (error){
        return res.status(500).json(erro) 
    }
})

app.get('/listar-lanches',async(req,res)=>{
    try{
        let lanches = await lanche.find()
        return res.status(200).json(lanches)
    }catch (error){
        return res.status(500).json(erro) 
    }
})

app.post('/cadastrar-lanchess', async(req,res)=>{
    try{
        let lanches = await lanche.find()
        return res.status(201).json(lanches)
    }catch (error){
        return res.status(500).json(erro)
    }
    
})

mongoos.connect(connectionString, {
    dbName: "Devs-bar"
}).then(()=>{
    console.log('MONGO UP!!')
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch( (error)=>{
    console.log(error)
})
