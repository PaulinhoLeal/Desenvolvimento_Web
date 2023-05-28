const mongoose = require('mongoose')

const animalSchema = mongoose.Schema(
    {
        nome:{type:String, required:true},
        raca:{type:String, required:true},
        idade:{type:Number, required:true}
    })
const animal = mongoose.model('animais',animalSchema)

module.exports=animal