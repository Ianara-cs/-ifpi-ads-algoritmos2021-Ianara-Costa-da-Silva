const input = require('prompt-sync')()

function main(){

    let num = Number(input('Número: '))
    let limite_inferior = Number(input('Limite inferior: '))
    let limite_superior = Number(input('Limite superior: '))

    let resultado = limite_inferior

    for(let i = 1; resultado < limite_superior ; i++){

        resultado = num * i
        
        console.log(`Mútiplo do número ${num}: ${resultado}`)
        
    }


}



main()