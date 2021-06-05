const input = require( 'prompt-sync')()


function main(){
    console.log('## Maior e Menor Número ##')

    const num1 = Number(input('Primeiro número: '))
    const num2 = Number(input('Segundo número: '))

    if(num1 > num2){
        console.log(`${num2} é o menor número e ${num1} é o maior número`)
    }else if (num1 < num2){
        console.log(`${num1} é o menor número e ${num2} é o maior número`)
    }

}

main()