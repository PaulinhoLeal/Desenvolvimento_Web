"use strict";
/*import Pessoa from "./pessoas";

let pessoa1 = new Pessoa('paulo',20);

console.log(`${pessoa1.getNome} tem ${pessoa1.getIdade} anos de idade` );

pessoa1.setNome('kamui');
console.log(pessoa1.getNome);*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const makako_1 = __importDefault(require("./makako"));
let makako = new makako_1.default();
console.log(makako.emitirSom());
