const input = require('prompt-sync')()

function main(){
    const valor_inicial = Number(input('Valor inicial = '))
    let limite = Number(input('Limite = '))
    const R = Number(input('Razão = '))


    console.log(`P.A em razão ${R} com o valor de ínicio ${valor_inicial} e seu limite ${limite}`)

    for(let i = valor_inicial ; i < limite; i){

        console.log(`Valor ${i}`)
        let n = 1

        i += valor_inicial + (n - 1) * R

        n++   

    }

}

main()