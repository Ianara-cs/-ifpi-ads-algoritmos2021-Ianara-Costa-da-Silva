const input = require('prompt-sync')()

function main(){
    let investimento = Number(input('Quanto de investimento(R$): '))
    let taxa = Number(input('Qual é a taxa mensal(%): '))

    let resposta = 'S'
    let soma = 0
    
    while(resposta !== 'N'){

        taxa = (taxa / 100) * investimento
        
        let calculo = investimento  + taxa

        soma = soma + (calculo* 12)
        
        
        console.log('Saldo do investimento anual:', soma)
        resposta = input('Deseja processar mais um ano (S/N): ')
        
    }
}

main()