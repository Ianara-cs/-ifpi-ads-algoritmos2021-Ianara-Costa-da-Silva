const input = require('prompt-sync')()

function main(){

    const numero_x = Number(input('Número X: '))
   
    let anterior = numero_x
    let atual = Number(input('Número: '))
    soma = anterior + atual

    while(!(soma === numero_x)){

        anterior = atual
        atual = Number(input('Número: '))

        soma = atual + anterior
    }

}

main()