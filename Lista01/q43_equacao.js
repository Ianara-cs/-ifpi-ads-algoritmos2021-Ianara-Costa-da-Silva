const input = require('prompt-sync')();

// Entrada
console.log('Informe os coeficientes para saber quanto vale o x e y')
const a = Number(input('Coloque o coeficiente de a: '))
const b = Number(input('Coloque o coeficiente de b: '))
const c = Number(input('Coloque o coeficiente de c: '))
const d = Number(input('Coloque o coeficiente de d: '))
const e = Number(input('Coloque o coeficiente de e: '))
const f = Number(input('Coloque o coeficiente de f: '))

// Processamento
const valor_x = (c*e - b*f) / (a*e - b*d)
const valor_y = (a*f - c*d) / (a*e - b*d)

// Saída
console.log(`O valor de x = ${valor_x} e o valor de y = ${valor_y}`)