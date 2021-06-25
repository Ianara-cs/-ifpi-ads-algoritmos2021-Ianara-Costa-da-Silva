const input = require('prompt-sync')()

function main(){

    let num = Number(input('Número N: '))

    console.log('Sequência de Fibonacci')

    if(num >= 2){
        const numero = 0
        let anterior = numero
        let atual = 1

        let resultado = atual + anterior

        for(let i = 1 ; i <= num; i++ ){

            anterior = atual
            atual = resultado

            resultado = atual + anterior

            console.log(anterior)
        }    
    }else{
        console.log('Digite um número igual ou maior que 2')
    }
    
}

main()