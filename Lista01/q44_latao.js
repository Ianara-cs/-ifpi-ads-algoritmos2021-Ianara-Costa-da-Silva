const input = require('prompt-sync')();

// Entrada
const latao =  Number(input('Quantidade de latão(Kg): '))

// Processamento
const cobre = latao * 0.70
const zinco = latao * 0.30

// Saída
console.log(`${latao} KG de latão contém ${cobre} Kg de cobre e ${zinco} Kg de zinco`)