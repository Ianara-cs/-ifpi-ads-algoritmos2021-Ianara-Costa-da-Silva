const input = require('prompt-sync')()

function main(){
    let num = Number(input('Número: '))

    let s = 0
    let acrescimo = 0

    for(i = 1; i <= num; i++){

        s = s + (1 / (i + acrescimo)) - (1/ (i + 1 + acrescimo))
        console.log(s)

        acrescimo++
    }

    console.log(`Resultado: S = ${s.toFixed(5)}`)


}

main()