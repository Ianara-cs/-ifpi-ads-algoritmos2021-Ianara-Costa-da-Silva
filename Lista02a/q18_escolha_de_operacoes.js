const input = require('prompt-sync')()

function main(){
    console.log('1 - Adição')
    console.log('2 - Subtração')
    console.log('3 - Multiplicação')
    console.log('4 - Divisão')

    const operacao = Number (input('Número que representa a operação matemática: '))

    const valor1 = Number(input('Valor 1: '))
    const valor2 = Number(input('Valor 2: '))

    const resultado = escolha(valor1, valor2, operacao)
    console.log(resultado)
}

function escolha(num1, num2, operacao){
    if(operacao===1){
        const soma = num1 + num2
        return soma
        
    }else if(operacao===2){
        const sub = num1 - num2
        return sub
    }else if(operacao===3){
        const multi = num1 *num2
        return multi
    }else if(operacao===4){
        const divi = num1 / num2
        return divi
    }
}  
main()