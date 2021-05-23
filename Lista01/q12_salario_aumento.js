const input = require('prompt-sync')();

// Entrada
console.log('Coloque seu sálario para ver o novo sálario com um aumento de 25%')
const salario = Number (input('Sálario: '))

// Processamento
const novo_salario = salario * 1.25

// Saída 
console.log(`Seu sálario era R$ ${salario} e passou a ser R$ ${novo_salario}`)