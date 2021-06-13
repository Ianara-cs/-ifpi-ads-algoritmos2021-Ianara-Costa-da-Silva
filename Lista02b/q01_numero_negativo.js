const input = require('prompt-sync')()

function main(){
    console.log(' ### Número positivo ou negativo ###')

    const numero = Number(input('Coloque um número inteiro: '))

    if(numero > 0 ){
        console.log(`O ${numero} é positivo`)
    }else if(numero < 0 ){
        console.log(`O ${numero} é negativo`)
    }else if(numero === 0){
        console.log('O 0 é neutro')
    }
} 
main()