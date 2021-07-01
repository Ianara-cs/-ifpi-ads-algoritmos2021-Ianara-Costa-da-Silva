const input = require('prompt-sync')()

function main(){
    const numero = input('Número binário: ')

    de_binario_para_decimal(numero)

}

function de_binario_para_decimal(numero){
    let decimal = 0
    let caractere = ''
    let expoente = 0

    for(let i = numero.length - 1 ; i >= 0; i--){
        caractere = numero[i]
        decimal += caractere * Math.pow(2, expoente)
        expoente++
    }
    console.log(`O número binário ${numero} em decimal é ${decimal}`)

}

main()