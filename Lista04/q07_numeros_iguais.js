const  input = require('prompt-sync')()

function main(){
    const numero = Number(input('Número: '))

    let num = 0

    while(!(numero === num)){


        num = Number(input('Número: '))
    }

    console.log('Fim')

}

main()