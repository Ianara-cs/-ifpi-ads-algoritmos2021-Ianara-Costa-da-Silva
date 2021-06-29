const input = require('prompt-sync')()

function main(){
    console.log('### Multiplicação ###')
    
    const num1 = Number(input('Número 1: '))
    const num2 = Number(input('Número 2: '))

    let maior = num1 > num2 ? num1 : num2
    let menor = num1 < num2 ? num1 : num2

    let quantidade = 0
    let resultado = 0


    while(maior !== quantidade){

        resultado = resultado + menor

        maior--
    }

    console.log('Resultado:', resultado)

}

main()