const input = require('prompt-sync')();

// Entrada
const anos = Number(input('Quantidade de anos fumando: '))
const dias = Number(input('Quantidade de cigarro por dia: '))
const carteira_preço = Number(input('Preço de uma carteira de cigarro: '))

// Processamento
const total_cigaros = anos * 365 * dias
const gasto = (total_cigaros / 20) * carteira_preço

// Saída
console.log('O gasto do fumante é:', gasto)