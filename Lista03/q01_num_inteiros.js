const input = require('prompt-sync')()

function main(){
    let num = Number(input('Número: '))
    console.log(`Todos os número de 1 a ${num}`)

    for(let i= 1 ; i <= num ; i++){
        console.log(i)
    }

}

main()