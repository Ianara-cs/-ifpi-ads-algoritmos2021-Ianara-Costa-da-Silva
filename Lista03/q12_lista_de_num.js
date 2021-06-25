const input = require('prompt-sync')()

function main(){
    let num = Number(input('Quantidade de números para sua lista: '))
    let soma = 0

    for(i = 1; i <= num ; i++){
        let numero = Number(input('Número: '))

        soma = soma + numero
    }

    let media = soma / num

    console.log(`A soma de todos os número da lista é igual a ${soma}`)
    console.log(`A media é igual a ${media}`)

}

main()