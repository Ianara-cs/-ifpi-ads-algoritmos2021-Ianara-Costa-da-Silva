const input = require('prompt-sync')()

function main(){
    console.log('Acerte o número que está entre 0 e 9 ')

    let num = Number(input('Número: '))
    
    let random = Math.floor(Math.random() * 10)
    let num_aleatorio = random

    while(num !== num_aleatorio){

        if(num < num_aleatorio){
            console.log('Maior')
        }else if(num > num_aleatorio){
            console.log('Menor')
        }
        
        random = Math.floor(Math.random() * 10)
        num = Number(input('Número: '))

    }

    console.log('Parabéns você acertou')


}

main()