let listaDePesssoas = [
    {
        nome:'Pa',
        sobrenome:'l',
        idade:20
    },
    {
        nome:'Julia',
        sobrenome:'silva',
        idade:15
    },
    {
        nome:'Cuadrado',
        sonbrenome:'berg',
        idade:32
    },
    {
        nome:'Vitor',
        sobrenome:'almeida',
        idade:18
    },
    {
        nome:'Fernanda',
        sobrenome:'leite',
        idade:28
    }
]

function ehMaiorIdade (pessoas)
{

    for (let pessoa of pessoas)
    {
        if(pessoa.idade<18)
        {
            console.log('Seja  bem vindo(a)!Você se chama',pessoa.nome,pessoa.sobrenome, 'e tem',pessoa.idade,'anos e não é maior de idade')
        }
        else
        {
            console.log('Seja  bem vindo(a)!Você se chama',pessoa.nome,pessoa.sobrenome, 'e tem',pessoa.idade,'anos e é maior de idade')
        }
    }
    console.log('\n')
}
ehMaiorIdade(listaDePesssoas)


let verificaNome =(listaDePesssoas)=>{
    for(pessoa of listaDePesssoas)
    {
        if(pessoa.nome.length+pessoa.sobrenome.length<=3)
        {
          console.log('Erro!,nome e sobrenome devem ser maiores que 3 caracteres')
        }
        else if(pessoa.nome.length+pessoa.sobrenome.length>=55)
        {
           console.log('Erro!, nome e sobrenome devem ser menores que 55 caracteres')
        }
    }
}
verificaNome(listaDePesssoas)

function quantPessoas(pessoas)
{
 
    console.log('O total de pessoas na lista é',pessoas.length)
}

quantPessoas(listaDePesssoas)






