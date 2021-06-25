const input = require('prompt-sync')()

function main(){

    const qts_habitantes = Number(input('Quantidade de habitantes: '))
    
    let soma_salario = 0
    let soma_filhos = 0
    let media_salarial = 0
    let media_filhos = 0
    let salario_ate_mil_reais = 0
    let percentual_sal_mil = 0

    for(let i = 1; i <= qts_habitantes; i++){

        let salario = Number(input('Seu salário(R$): '))
        let qts_filhos = Number(input('Quantidade de filhos: '))

        soma_salario = soma_de_todos_salarios(salario, soma_salario)
        soma_filhos = soma_de_todos_filhos(qts_filhos, soma_filhos)

        media_salarial = soma_salario / i
        media_filhos = soma_filhos / i

        salario_ate_mil_reais = saber_total_de_pessoas(salario_ate_mil_reais, salario)

        percentual_sal_mil = (salario_ate_mil_reais / i) * 100

    }

    console.log(' #### Resultado da pesquisa #####')
    console.log('------------------------------------')
    console.log(`Média de sálario da população: R$ ${media_salarial.toFixed(2)}`)
    console.log(`Média de número de filhos: ${media_filhos.toFixed(2)}`)
    console.log(`Percentual de pessoas de salário de até R$ 1000.00: ${percentual_sal_mil.toFixed(2)}%`)

}

function soma_de_todos_salarios(salario, soma){
    return soma += salario
}

function soma_de_todos_filhos(qts_filhos, soma_filhos){
    return soma_filhos += qts_filhos
}

function saber_total_de_pessoas(salario_mil_reais, salario){
    if(salario <= 1000){
       return salario_mil_reais = salario_mil_reais + 1
    }else{
        return salario_mil_reais
    }
}



main()