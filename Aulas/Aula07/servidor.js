
const express = require('express')
const app = express()
const port = 7000


let produtos = [
    {
        id:1,
        nome:'bolo abacaxi',
        descricao:'asdgawr',
        valor:50
    },
    {
        id:2,
        nome:'bolo amora',
        descricao:'fasfda',
        valor:100
    }     
]

let carrinho =[
    {
        produto:'afsdfa',
        valor:121
    },
    {
        produto:'safasf',
        valor:200
    },
    {
        produto:'bolo doce',
        valor:200
    }
]

app.get('/carrinho', function(req,res){
    res.send(carrinho)
})

app.get('/', function(req,res){
    res.send('BIEN VIENIDO')
})

app.get('/produtos',function(req,res){
    res.send(produtos)
})

app.listen(port, function(){
    console.log(`servidor rodando http://localhost:${port}`)
})