function somar (n1,n2)
{
   console.log( n1+n2)
}
function subtrair()
{
    let n1=5
    let n2=10
    return n2-n1
}
function dividir(n1,n2)
{
    return console.log(n1/n2)
}
function apresentacao(nome,sobrenome,idade)
{
    console.log('Óla',nome,sobrenome,'você tem',idade,'anos de idade')
}
apresentacao('paulo','herique',20)

function endereco(pessoa)
{
  console.log('Bem-vindp!!',pessoa.nome,'de idade de',pessoa.idade,'anos','\n','endereco:',pessoa.endereco
  ,'e telefone',pessoa.telefone)
}
let Pessoas ={
    nome:'paulo',
    idade:20,
    endereco:['rua xxx',1200],
    telefone:[1234,4321]
}
console.log(endereco(Pessoas))



