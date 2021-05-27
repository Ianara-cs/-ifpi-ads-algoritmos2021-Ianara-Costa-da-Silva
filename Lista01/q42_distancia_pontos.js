const input = require('prompt-sync')();

// Entrada
console.log('Coloque dois pontos de um plano para saber suas distância')
const x1 = Number(input('Coloque x1: '))
const y1 = Number(input('Coloque y1: '))

const x2 = Number(input('Coloque x2: '))
const y2 = Number(input('Coloque y2: '))

// Processamento
// Cálculo para saber a distância
const calculo1 = Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2)
const distancia = Math.sqrt(calculo1)


console.log('A distância entre eles será', distancia)