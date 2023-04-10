var banda = 
[
    {
    nome: 'Viajantes',
    anoPrimeiroCd: '2001',
    melhoresMusicas: ['navegando','sol do inverno','inverno tropical'],
    integrantes: [[{nome: 'João costa'},{paisOrigem: 'Brasíl'},{idade: 20}],
                 [{nome: 'Lúcio pizza'},{paisOrigem: "Itália"},{idade: 25}],
                 [{nome: 'Humberto haung'},{paisOrigem:'China'},{idade: 30}]],
    estiloMusical: 'reggae'

    
    },
    {
        nome: 'Dragão',
        anoPrimeiroCd: '1998',
        melhoresMusicas: ['sol','fogo','pimenta refrescante'],
        integrantes: [[{nome: 'Fernando junior'},{paisOrigem: 'Brasíl'},{idade: 22}],
                     [{nome: 'Marcos nakamura'},{paisOrigem: "Japão"},{idade: 25}],
                     [{nome: 'jessica kim'},{paisOrigem:'Coreia'},{idade: 19}]],
        estiloMusical: 'rock' 
    },
    {
        nome: 'Fonte reobote',
        anoPrieiroCd: '2005',
        melhoresMusicas: ['netuno','coração','lagrimas da fonte'],
        integrantes: [[{nome: 'Vizenco duarte'},{paisOrigem: 'Italia'},{idade: 40}],
                     [{nome: 'Carmen palabra'},{paisOrigem: "Bolivia"},{idade: 30}],
                     [{nome: 'Vivian mayer'},{paisOrigem:'Eua'},{idade: 27}]],
        estiloMusical: 'blues'
    }
]

console.log(banda)
banda.sort()
console.log()
banda.pop()
console.log(banda)



