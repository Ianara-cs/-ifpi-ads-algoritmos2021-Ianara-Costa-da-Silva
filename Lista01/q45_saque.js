const input = require('prompt-sync')();
   
console.log('Os valores que podem ser aplicados ao saque são: R$100, R$50, R$10, R$5 e R$1')
console.log('O limite de saque é de R$999,00')

//Entrada

const saque = Number(input('Informe o valor que será sacado: '))

//Processamento

const nota_100 = (saque - (saque%100)) / 100
const nota_50 = ((saque % 100) - (saque%50)) / 50
const nota_10 = ((saque % 50)- (saque%10)) / 10
const nota_05 = ((saque % 10)- (saque%5)) / 5
const moeda_01 = (saque % 5)

//Saída

console.log(`As notas que serão entregues de acordo com a solicitação do saque são:`)
console.log(`${nota_100} notas de R$100`)
console.log(`${nota_50} notas de R$50`)
console.log(`${nota_10} notas de R$10`)
console.log(`${nota_05} notas de R$5`)
console.log(`${moeda_01} moedas de R$1`)