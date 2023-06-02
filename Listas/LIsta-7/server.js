const exprees = require('express')
const api = exprees()
const port = 8050

let usuario =[
    {
        nomeUsuario:'janaina',
        nascidoEm: '20/12/0505',
        idade:15,
        emai:'janaina@umo.com',
        idAdmin:true,
        telefone:['113416916','12414114'],
        endereco:['rua dango, 190 jardim mongolia, rua balango, 444 jardim bolo' ]
    },
    {
        nomeUsuario:'julio',
        nascidoEm: '20/12/0505',
        idade:15,
        emai:'julio@umo.com',
        idAdmin:true,
        telefone:['113416916','12414114'],
        endereco:['rua dango, 190 jardim mongolia, rua balango, 444 jardim bolo' ]
    },
    {
        nomeUsuario:'paulo',
        nascidoEm: '20/12/0505',
        idade:15,
        emai:'paulo@umo.com',
        idAdmin:false,
        telefone:['113416916','12414114'],
        endereco:['rua dango, 190 jardim mongolia, rua balango, 444 jardim bolo' ]
    },
    {
        nomeUsuario:'fernando',
        nascidoEm: '20/12/0505',
        idade:15,
        emai:'fernando@umo.com',
        idAdmin:false,
        telefone:['113416916','12414114'],
        endereco:['rua dango, 190 jardim mongolia, rua balango, 444 jardim bolo' ]
    },
    {
        nomeUsuario:'julia',
        nascidoEm: '20/12/0505',
        idade:15,
        emai:'julia@umo.com',
        idAdmin:true,
        telefone:['113416916','12414114'],
        endereco:['rua dango, 190 jardim mongolia, rua balango, 444 jardim bolo' ]
    }
]
api.get('/usuarios',(req,res)=>{
    try{
        return res.status(200).json(usuario)
    }catch(error){
        return res.status(500).json(error)
    }


})

let produto =[
    {
        nomeProduto:'batata',
        descricao:'batata do céu',
        valor:100,
        criadoEm:'24/24/0424',
        emEstoque:true
    },
    {
        nomeProduto:'pedra',
        descricao:'pedra relusente',
        valor:100,
        criadoEm:'24/24/0424',
        emEstoque:true
    },
    {
        nomeProduto:'maça',
        descricao:'maçã dourada',
        valor:1000,
        criadoEm:'24/24/8524',
        emEstoque:false
    },
    {
        nomeProduto:'agua',
        descricao:'agua curativa',
        valor:100,
        criadoEm:'24/24/055',
        emEstoque:true
    }            
]
api.get('/produtos', (req,res)=>{
    try{
        return res.status(201).json(produto)
    }catch(error){
        return res.status(500).json(error)
    }
})

api.listen(port,()=>{
    console.log(`http://localhost:${port}`)})