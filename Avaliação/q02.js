const input = require('prompt-sync')()

function main(){
    console.log('Veja seu sálario junto com a comissão (de acordo com a política de comissão da loja)')
    
    const nome = input('Nome do vendedor: ')
    const vendas = Number(input('Total de vendas no mês(R$): '))

    const salario = 1100

    if(vendas > 5000 && vendas <=10000){
        const escalonaçao = valor_de_comisao(vendas)
        const salario_final = escalonaçao + salario
        console.log(`${nome} vendeu R$ ${vendas.toFixed(2)} e ganhou R$ ${escalonaçao.toFixed(2)} de comissão`)
        console.log(`O salário fixo é ${salario.toFixed(2)}`)
        console.log(`E seu sálario final ficou de R$ ${salario_final.toFixed(2)}`)

    }else if(vendas > 10000 && vendas <= 30000){
        const escalonaçao = valor_de_comisao(vendas)
        const comissao_total = escalonaçao + 250 
        const salario_final = salario + comissao_total
        console.log(`${nome} vendeu R$ ${vendas.toFixed(2)} e ganhou R$ ${escalonaçao.toFixed(2)} mais R$ 250.00 de comissão, no qual sua comissão total é ${comissao_total.toFixed(2)}`)
        console.log(`O salário fixo é ${salario.toFixed(2)}`)
        console.log(`E seu sálario final ficou de R$ ${salario_final.toFixed(2)}`)

    }else if(vendas > 30000){
        const escalonaçao = valor_de_comisao(vendas)
        const salario_final = escalonaçao + salario
        console.log(`${nome} vendeu R$ ${vendas.toFixed(2)}, portanto ganhará R$ ${escalonaçao.toFixed(2)} de comissão`)
        console.log(`O salário fixo é ${salario.toFixed(2)}`)
        console.log(`E seu sálario final ficou de R$ ${salario_final.toFixed(2)}`)
    }else{
        console.log(`${nome} vendeu até R$ 5 mil, portanto não gerou comissão`)
        console.log(`Seu salário final é de ${salario.toFixed(2)}`)
    }

}

function valor_de_comisao(venda){
    if(venda > 5000 && venda <=10000){
        const diferenca = (venda - 5000) 
        return (diferenca * 0.05)
        

    }else if(venda > 10000 && venda <= 30000){
        const diferenca = venda - 10000
        return (diferenca * 0.1) 
    }else if(venda > 30000){
        return (venda * 0.2)
    }

}

main()