const input = require('prompt-sync')()

function main(){

    const opcao = Number(input('Coloque um número de 1 a 3: '))
    const num1 = Number(input('Primeiro número: '))
    const num2 = Number(input('Segundo número: '))
    const num3 = Number(input('Terceiro número: '))

    if(opcao === 1){
        console.log(num1)
    }else if(opcao === 2){
        console.log(num2)
    }else if(opcao === 3){
        console.log(num3)
    }

}
main()