const input = require('prompt-sync')()

function main(){
    const lado1 = Number(input('Lado 1: '))
    const lado2 = Number(input('Lado 2: '))
    const lado3 = Number(input('Lado 3: '))

    let maior = lado1

    if(lado2 > lado1 && lado2 > lado3 ){
        console.log('A hipotenusa é o lado 2 e os catetos são os lados 1 e 3')  
    }else if(lado3 > lado2 && lado3 > lado1){
        console.log('A hipotenusa é o lado 3 e os catetos são os lados 1 e 2')  
    }else if(lado1 > lado2 && lado1 > lado3){
        console.log('A hipotenusa é o lado 1 e os catetos são os lados 2 e 3')  
    }else{
        console.log('Não é um triângulo retângulo')
    }
}
main()