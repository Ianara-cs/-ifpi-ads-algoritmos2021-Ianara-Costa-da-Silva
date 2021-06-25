const input = require('prompt-sync')()

function main(){
    let N = Number(input('Número N: '))

    let quadrado = 1

    for(let i = quadrado; i <= N; i = i + Math.pow(i, 2) ){

        quadrado = i * i
    }

    console.log(`O quadrado próximo a ${N} é ${quadrado}`)

}

main()