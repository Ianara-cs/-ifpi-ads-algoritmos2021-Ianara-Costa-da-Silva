const input = require('prompt-sync')();

// Entrada
console.log('Coloque suas três notas para ver sua média')
const nota1 = Number (input('Primeira nota: '))
const peso1 = Number (input('Nota peso:'))

const nota2 = Number (input('Segunda nota: '))
const peso2 = Number (input('Nota peso: '))

const nota3 = Number (input('Terceira nota: '))
const peso3 = Number (input('Nota peso: '))

// Processamento 
const media_ponderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)

// Saída 
console.log('A média de suas notas é:', media_ponderada)