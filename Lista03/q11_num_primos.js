const input = require('prompt-sync')()

function main(){

    let limite_inferior = Number(input('Limite inferior: '))
    let limite_superior = Number(input('Limite superior: '))

    for(let i = limite_inferior ; i <= limite_superior ; i++){

        if(i % 2 == 0 || i % 3 === 0 || i % 5 === 0){
            continue
        }
        
        console.log(`Número primo entre ${limite_inferior} e ${limite_superior}: ${i}`)
        
    }


}



main()