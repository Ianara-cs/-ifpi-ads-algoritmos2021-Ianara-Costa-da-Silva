const input = require('prompt-sync')()

function main(){

    const valor_hora = Number(input('Valor de sua hora(R$): '))
    const horas_mes = Number(input('Quantidade de horas trabalhada no mês: '))

    const salario_bruto = valor_hora * horas_mes
    const inss = (desconto(salario_bruto, 10)) 
    const fgts = (desconto(salario_bruto, 11))
    const ir = desconto_do_ir(salario_bruto)

    const desconto_total = inss + ir
    const valor_liquido = salario_bruto - desconto_total

    console.log(`Salario Bruto: R$ ${salario_bruto.toFixed(2)}`)
    console.log(`(-) IR (5%): R$ ${ir.toFixed(2)}`)
    console.log(`(-) INSS (10%): R$ ${inss.toFixed(2)}`)
    console.log(`FGTS (11%): R$ ${fgts.toFixed(2)}`)
    console.log(`Total de descontos: R$ ${desconto_total.toFixed(2)}`)
    console.log(`Salário Líquido: R$ ${valor_liquido.toFixed(2)}`)

}

function desconto(valor, percentual){
    return (valor * (percentual / 100))
}

function desconto_do_ir(salario_b){
    if(salario_b <= 900){
        return 0
    }else if(salario_b > 900 && salario_b <= 1500){
        return (desconto(salario_b, 5))
    }else if(salario_b > 1500 && salario_b <= 2500){
        return (desconto(salario_b, 10))
    }else if(salario_b > 2500){
        return (desconto(salario_b, 20))
    }
}
main()