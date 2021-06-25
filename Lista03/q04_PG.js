const input = require('prompt-sync')()

function main(){
    const valor_inicial = Number(input('Valor inicial = '))
    let limite = Number(input('Limite = '))
    const R = Number(input('Razão = '))

    let n = 1

    console.log(`P.G em razão ${R} com o valor de ínicio ${valor_inicial} e seu limite ${limite}`)

    for(let i = valor_inicial ; i < limite; i += valor_inicial * Math.pow(R, n - 1)){

        console.log(`Valor ${i}`)
        n++

    }

}

main()