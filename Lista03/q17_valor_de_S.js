const input = require('prompt-sync')()

function main(){
    let num = Number(input('Número: '))

    let s = 0

    for(i = 1; i <= num; i++){

        s = s + 1/i
    }

    console.log(`Resultado: S = ${s.toFixed(3)}`)


}

main()