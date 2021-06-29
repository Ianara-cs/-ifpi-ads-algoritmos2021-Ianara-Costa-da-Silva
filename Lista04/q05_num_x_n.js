const input = require('prompt-sync')()

function main(){
    let num_x = Number(input('Número X: '))
    let num_n = Number(input('Número N: '))

    let divisao = num_x / num_n
   
    

    while(!(num_n < 2)){

        num_x = divisao
        num_n--
        divisao = num_x / num_n
    }
    
    console.log(`Resultado da divisão ${divisao.toFixed(2)}`)

}

main()