const input = require('prompt-sync')()

function main(){
    let num = Number(input('Número N: '))

    let acrescimo = 1

    for(let i = 1; i <= num; i = i + acrescimo ){

        console.log(i)
        acrescimo++

    }

}

main()