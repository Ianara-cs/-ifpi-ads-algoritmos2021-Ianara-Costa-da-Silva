const input = require('prompt-sync')()

function main(){
    console.log('## Igual ou Diferente o Número da Dezena com da Unidade ##')

    const numero = Number(input('Número com dois dígitos: '))

    if(igualdade_diferenca(numero)){
        console.log('O algarismo da UNIDADE é igual ao algarismo da DEZENA')
    }else{
        console.log('O algarismo da UNIDADE é diferente do algarismo da DEZENA')
    }


}

function igualdade_diferenca(valor){
    const dezena = Math.trunc(valor / 10)
    const unidade = valor % 10
    return (dezena === unidade)
       

}
main()