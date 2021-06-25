const input = require('prompt-sync')()

function main(){
    let num = Number(input('Número: '))
    let calculo = 0

    for(let i = num - 1 ; i > 1 ; i--){

        calculo += i
    }

    console.log(`Resultado da soma entre todos os número entre 1 e ${num} é igual a ${calculo}`)

}

main()