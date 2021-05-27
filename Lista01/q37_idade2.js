const input = require('prompt-sync')();

// Entrada
const idade_dias = Number(input('Informe sua idade expressa em dias:'))

// Processamento
const anos = (idade_dias - (idade_dias%365)) / 365
const meses = ((idade_dias%365) - (idade_dias%30)) / 30
const dias = idade_dias % 30

// Saída
console.log('A idade convertida em anos, meses e dias será:',anos,'anos', meses,'mês(s) e', dias,'dia(s)' )