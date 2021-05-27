const input = require ('prompt-sync')();

// Entrada
const binario = Number(input('Coloque um número binário com quatro dígitos: '))

// Processamento
const digito1 = (binario - (binario%1000)) / 1000
const digito2 = ((binario%1000)-(binario%100)) / 100
const digito3 = ((binario%100)- (binario%10)) / 10
const digito4 = binario%10

const num1 = digito4 * Math.pow(2, 0)
const num2 = digito3 * Math.pow(2, 1)
const num3 = digito2 * Math.pow(2, 2)
const num4 = digito1 * Math.pow(2, 3)
const resultado = num1 + num2 + num3 + num4

// Saída 
console.log(`O número ${binario} em binário é igual a ${resultado} em decimal`)