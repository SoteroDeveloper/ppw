const prompt = require("prompt-sync")();

const valorSaque = Number(prompt("Digite o valor desejado para saque - "));

if(valorSaque === " " || valorSaque === NaN  ){
console.log("digite um valor númerico para o campo");
}else{
    console.log("o valor digitado foi 10");
}