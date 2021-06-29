const input = require('prompt-sync')()

function main(){

    const num_a = Number(input('Número A: '))
    const num_b = Number(input('Número B: '))

    let maior = num_a > num_b ? num_a : num_b
    let mmc = maior
    

    while(!(mmc % num_a === 0 && mmc % num_b === 0)){
        mmc = mmc + maior
    }

    console.log('MMC:', mmc)

}
main()