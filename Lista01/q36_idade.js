const input = require('prompt-sync')();

// Entrada
const idade = Number(input('Informe sua idade: '))
const meses = Number(input('Informe meses de vida(em um ano): '))
const dias = Number(input('Informe dias de vida(em um mês): '))

// Processamento
const anos_dias = idade * 365
const mese_dias = meses * 30

const resultado = anos_dias + mese_dias + dias 

// Saída
console.log('A sua idade em dias é:', resultado, 'dias')