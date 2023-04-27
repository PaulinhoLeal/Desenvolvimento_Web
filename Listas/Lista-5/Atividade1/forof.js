let pessoa =[
    {
        nome:'',
        idade:0,
        ehAdmin:false,
        email:''
    },
    {
        nome:'',
        idade:0,
        ehAdmin:true,
        email:''
    },
    {
        nome:'',
        idade:0,
        ehAdmin:false,
        email:''
    },
    {
        nome:'',
        idade:0,
        ehAdmin:false,
        email:''
    },
    {
        nome:'',
        idade:0,
        ehAdmin:false,
        email:''
    }
]

for(let pessoas of pessoa)
{
    if(pessoas.ehAdmin==true)
    {
        console.log('Olá ', pessoas.nome,'! Bem-vindo(a) você é admin do sistema, enviamos um email para ', pessoas.email)    
    }
    else
    {
        console.log('Olá ', pessoas.nome,'! Bem-vindo(a) você não é admin do sistema, enviamos um email para '
        ,pessoas.email,' para você criar uma senha')
    }
}