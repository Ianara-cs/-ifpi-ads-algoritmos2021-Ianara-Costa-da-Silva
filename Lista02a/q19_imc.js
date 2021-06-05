const input = require('prompt-sync')()

function main(){

    const peso = Number(input('Coloque o peso(Kg): '))
    const altura = Number(input('Coloque o altura(m): '))

    const imc = peso / Math.pow(altura, 2)

    if(imc < 25){
        console.log('Normal')
    }else if(imc >= 25 && imc  <= 30){
        console.log('Obeso')
    }else if(imc > 30){
        console.log('Obesidade mórbida')
    }
}
main()