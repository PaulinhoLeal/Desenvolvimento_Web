const express =require('express')()
const port=10000

let Banda = [
    {
        nome:'golden bomber',
        principaisMusicas:['memeshikute','hoteru rabbu'],
        integrantes:
        [
            {
                nome:'jun utashiroba',
                pais:'Japão',
                idade:28
            },
            {
                nome:'yutaka kyan',
                pais:'Japão',
                idade:25
            },
            {
                nome:'kenji darvish',
                pais:'Japão',
                idade:30
            }
        ]
    },
    {
        nome:'The Oral Cigarettes',
        principaisMusicas:['red criminal', 'youshi tanrei na uso'],
        integrantes:
        [
            {
                nome:'akira akirakani',
                pais:'Japão',
                idade:32
            },
            {
                nome:'masaya nakanishi',
                pais:'Japão',
                idade:25
            },
            {
                nome:'takuya yamanaka',
                pais:'Japão',
                idade:22
            }
        ]
    },
    {
        nome:'程響 歌曲合集 ',
        principaisMusicas:['程响', '不再聯系'],
        integrantes:
        [
            {
                nome:'一花一世界》',
                pais:'学术搜索',
                idade:39
            },
            {
                nome:'《時光洪流》',
                pais:'学术搜索',
                idade:26
            },
            {
                nome:'《人間煙火》',
                pais:'学术搜索',
                idade:19
            }
        ]
    }
]

express.get('/banda',function(req,res){
    res.send(Banda)
})

express.listen(port,function (){
    console.log(`ouvindo...`)
})