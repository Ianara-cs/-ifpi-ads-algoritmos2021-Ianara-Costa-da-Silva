const input = require('prompt-sync')()

function main(){

    const salario = Number(input('Coloque seu salário(R$): '))
    const reajuste = Number(input('Coloque o reajuste(%): '))

    const porcentagem = (salario * (reajuste / 100))
    const novo_salario = salario + porcentagem

    if(salario <= 280 && reajuste === 20){
        console.log(`Salário ante do reajuste: R$ ${salario.toFixed(2)}`)
        console.log(`Percentual do aumento aplicado: ${reajuste}%`)
        console.log(`Valor do aumento: R$ ${porcentagem.toFixed(2)}`)
        console.log(`Novo salário: R$ ${novo_salario.toFixed(2)}`)

    }else if(salario > 280 && salario <= 700 && reajuste === 15){
        console.log(`Salário ante do reajuste: R$ ${salario.toFixed(2)}`)
        console.log(`Percentual do aumento aplicado: ${reajuste}%`)
        console.log(`Valor do aumento: R$ ${porcentagem.toFixed(2)}`)
        console.log(`Novo salário: R$ ${novo_salario.toFixed(2)}`)

    }else if(salario > 700 && salario <= 1500 && reajuste === 10){
        console.log(`Salário ante do reajuste: R$ ${salario.toFixed(2)}`)
        console.log(`Percentual do aumento aplicado: ${reajuste}%`)
        console.log(`Valor do aumento: R$ ${porcentagem.toFixed(2)}`)
        console.log(`Novo salário: R$ ${novo_salario.toFixed(2)}`)

    }else if(salario > 1500 && reajuste === 5){
        console.log(`Salário ante do reajuste: R$ ${salario.toFixed(2)}`)
        console.log(`Percentual do aumento aplicado: ${reajuste}%`)
        console.log(`Valor do aumento: R$ ${porcentagem.toFixed(2)}`)
        console.log(`Novo salário: R$ ${novo_salario.toFixed(2)}`)
    }else{
        console.log('Informe o reajuste correto')
    }

}

main()