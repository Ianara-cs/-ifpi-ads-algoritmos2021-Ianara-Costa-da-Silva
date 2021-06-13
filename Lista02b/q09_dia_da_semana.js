const input = require('prompt-sync')()

function main(){


    const numero = Number(input('Coloque o número que corresponde o dia da semana: '))

    if(numero === 1 ){
        console.log('Domingo')
    }else if(numero === 2){
        console.log('Segunda')
    }else if(numero === 3){
        console.log('Terça')
    }else if(numero === 4){
        console.log('Quarta')
    }else if(numero === 5){
        console.log('Quinta')
    }else if(numero === 6){
        console.log('Sexta')
    }else if(numero === 7){
        console.log('Sábado')
    }else{
        console.log('Valor inválido')
    }


}
main()