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
    },
    {
        nome:'',
        idade:0,
        ehAdmin:false,
        email:''
    }
]

for(let i=0;i<pessoa.length;i++)
{
    if(pessoa[i].ehAdmin==true)
    {
        console.log('Olá ', pessoa[i].nome,'! Bem-vindo(a) você é admin do sistema, enviamos um email para ', pessoa[i].email)    
    }
    else
    {
        console.log('Olá ', pessoa[i].nome,'! Bem-vindo(a) você não é admin do sistema, enviamos um email para '
        ,pessoa[i].email,' para você criar uma senha')
    }
}