const input = require('prompt-sync')()

function main(){
    console.log('## Maior e  Menor Número')

    const num1 = Number(input('Primeiro Número : '))
    const num2 = Number(input('Segundo Número : '))
    const num3 = Number(input('Terceiro Número : '))
    const num4 = Number(input('Quarto Número : '))
    const num5 = Number(input('Quinto Número : '))

    const media = (num1 + num2 + num3 + num4 + num5) / 5
    

    if(num1 > media){
       console.log(`O número ${num1} é maior que a média`)
    }
    if(num2 > media){
        console.log(`O número ${num2} é maior que a média`)
    }
    if(num3 > media){
        console.log(`O número ${num3} é maior que a média`)
    }
    if(num4 > media){
        console.log(`O número ${num4} é maior que a média`)
    }
    if(num5 > media){
        console.log(`O número ${num5} é maior que a média`)
    }
}
main()
