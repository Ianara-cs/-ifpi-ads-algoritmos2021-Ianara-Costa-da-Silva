const input = require('prompt-sync')()

function main(){

    let salario = Number(input('Salário Atual: '))
    let soma_salarios = 0
    let soma_novos_salarios = 0
    
    while(salario !== 0){

        let novo_salario = 0

        if(salario > 0 && salario <= 2999.99){
            novo_salario = salario + reajuste(salario, 25)
            console.log(`Novo salário R$ ${novo_salario}`)
        }else if(salario >= 3000 && salario <= 5999.99){
            novo_salario = salario + reajuste(salario, 20)
            console.log(`Novo salário R$ ${novo_salario}`)
        }else if(salario >= 6000 && salario <= 9999.99){
            novo_salario = salario + reajuste(salario, 15)
            console.log(`Novo salário R$ ${novo_salario}`)
        }else if(salario > 10000){
            novo_salario = salario + reajuste(salario, 10)
            console.log(`Novo salário R$ ${novo_salario}`)
        }

        soma_salarios = soma_salarios + salario
        soma_novos_salarios = soma_novos_salarios + novo_salario

        salario = Number(input('Salário Atual: '))

    }

    let diferenca = Math.abs(soma_novos_salarios - soma_salarios)

    console.log(`Soma dos salários Atuais: R$ ${soma_salarios}`)
    console.log(`Soma dos salários Reajustados: R$ ${soma_novos_salarios}`)
    console.log(`Diferença dos salários Reajustados com os Atuais: R$ ${diferenca}`)
    
}

function reajuste(valor, percentual){
    return (valor * (percentual / 100))

}

main()