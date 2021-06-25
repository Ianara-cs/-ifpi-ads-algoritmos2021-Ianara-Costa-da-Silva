const input = require('prompt-sync')()

function main(){

    let num = Number(input('Número: '))

    let calculo = 1

    for(let i = num ; i > 0 ; i--){


        calculo = calculo * i

    }

    console.log(`Resultado de ${num}! é ${calculo}`)

}

main()