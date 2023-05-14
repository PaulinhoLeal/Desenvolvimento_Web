const express = require('express')
const api = express()




api.use(express.json())


let bancoDeDadosProdutos=[]
api.get('/produtos',(req,res)=> {
    return res.status(200).json(bancoDeDadosProdutos)
})

api.post('/adcionar-produto',(req,res)=>{
    let body= req.body
    console.log(body)

    bancoDeDadosProdutos.push(body)

    return res.status(201).json('produto cadastrado com sucesso')
})


api.listen(8050, ()=>{
    console.log(`ouvindo http://localhost:8050`)
})
