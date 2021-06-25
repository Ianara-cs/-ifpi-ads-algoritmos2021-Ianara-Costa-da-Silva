const input = require('prompt-sync')()

function main(){
    let num = Number(input('Número: '))

    console.log('Número pares de 1 a', num)

    for(let i= 2 ; i <= num ; i +=2){


        console.log(i)
    }
}
main()