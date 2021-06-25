const input = require('prompt-sync')()

function main(){
    let num = Number(input('Quantidade de números para sua lista: '))
    let maior = 0

    for(i = 1; i <= num ; i++){
        let numero = Number(input('Número: '))

        if(numero > maior){
            maior = numero
        }
    }
    console.log(`O maior número da lista é ${maior}`)

}

main()