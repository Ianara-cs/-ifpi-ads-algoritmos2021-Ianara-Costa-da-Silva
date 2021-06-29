const input = require('prompt-sync')()

function main(){
    console.log('Audiência dos canais de TV')
    console.log('Canal 2, Canal 4, Canal 5, Canal 7 e Canal 10')
    console.log('Para encerrar o programa coloque em canal 0')

    let canal = Number(input('Canal: '))
    let quant_pessoas = Number(input('Quantidade de pessoas assistindo: '))

    let canal2 = 0
    let canal4 = 0
    let canal5 = 0
    let canal7 = 0
    let canal10 = 0
    let quantidade_total = 0

    while(canal !== 0){

        if(canal === 2){
            canal2 = canal2 + quant_pessoas
        }else if(canal === 4){
            canal4 = canal4 + quant_pessoas
        }else if(canal === 5){
            canal5 = canal5 + quant_pessoas
        }else if(canal === 7){
            canal7 = canal7 + quant_pessoas
        }else if(canal === 10){
            canal10 = canal10 + quant_pessoas
        }

        quantidade_total = quantidade_total + quant_pessoas

        canal = Number(input('Canal: '))
        if(canal !== 0){
            quant_pessoas = Number(input('Quantidade de pessoas assistindo: '))
        }
    }

    const porcen_canal2 = (canal2 / quantidade_total) * 100
    const porcen_canal4 = (canal4 / quantidade_total) * 100
    const porcen_canal5 = (canal5 / quantidade_total) * 100
    const porcen_canal7 = (canal7 / quantidade_total) * 100
    const porcen_canal10 = (canal10 / quantidade_total) * 100

    console.log(`Canal 2 - Audiência: ${porcen_canal2.toFixed(2)}%`)
    console.log(`Canal 4 - Audiência: ${porcen_canal4.toFixed(2)}%`)
    console.log(`Canal 5 - Audiência: ${porcen_canal5.toFixed(2)}%`)
    console.log(`Canal 7 - Audiência: ${porcen_canal7.toFixed(2)}%`)
    console.log(`Canal 10 - Audiência: ${porcen_canal10.toFixed(2)}%`)
    console.log(`Quantidade de pessoas assistindo: ${quantidade_total}`)

}

main()