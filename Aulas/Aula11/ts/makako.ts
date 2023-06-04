import Animal from "./animais";

export default class Makako implements Animal{
    emitirSom():string{
        return "guinchando!!"  
    }

    domrindo(): boolean {
        return false
    }
          
}