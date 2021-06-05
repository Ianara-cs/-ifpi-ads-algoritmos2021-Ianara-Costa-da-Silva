const input = require('prompt-sync')()

function main(){
    console.log('## Verificaçâo do tipo triângulos pelos seus lados ##')
    console.log('Coloque os lados dos triângulos')
    console.log('(Lembrando que a soma dos dois primeiros lados não deve ser menor que o terceiro lado)')

    // Recebimento dos dados
    const lado1 = Number(input('Primeiro Lado: '))
    const lado2 = Number(input('Segundo Lado: '))
    const lado3 = Number(input('Terceiro Lado: '))

    if(eh_triangulo(lado1, lado2, lado3)){
       console.log('É triângulo ')

       const tipo = tipo_triangulo(lado1, lado2, lado3)
       console.log(tipo)
    
    }else{
        console.log('Não é triângulo')
    }
}

function eh_triangulo(a1, a2, a3){
    const soma = a1 + a2
    return !(soma < a3) && (a1 != 0 && a2 != 0 && a3 !=0)
}

function tipo_triangulo(a1, a2, a3){
    if((a1 != a2) && (a1 != a3) && (a2 != a3)){
        return 'É escaleno'
    }else if((a1 === a2) && (a1=== a3)){
        return 'É equilátero'
    }else if(a1===a2|| a1===a3 || a2===a3){
        return 'É isósceles'
    }
}

main()
