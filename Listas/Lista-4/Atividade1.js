var contaCorrente = 
{
    saldo:0,
    faturaAtual:0,
    creditoDisponivel:0,
    extrato: 
    {
        entrada:
        [
            {
                data:'',
                valor:0
            },
            {
                data:'',
                valor:0
            }
        ],
        saida:
        [
            {
                data:'',
                valor:0,
                descricao:''
            },
            {
                data:'',
                valor:0,
                descricao:''
            }
        ]
    },
    exibirExtrato: false
}

if (contaCorrente.saldo>contaCorrente.faturaAtual)
    {
     console.log("Você possui saldo para pagar a conta!")
    }
else
    {
     console.log("Você não possui saldo para pagar a conta!, Experimente pegar crédito.")
     console.log(("Crédito disponivel:") + contaCorrente.creditoDisponivel)
        
    }
        
   



 