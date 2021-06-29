const input = require('prompt-sync')()

function main(){
    console.log('Coloque os número de acordo com a sua opinião, para encerra o programa coloque -1 em idade')
    console.log('Ótimo - 1, Bom - 2, Regular - 3, Péssimo - 4')

    let idade = Number(input('Sua idade: '))
    let opiniao = Number(input('Sua opiniâo em relaçao ao filme: '))

    let quant_otimo = 0
    let quant_bom = 0
    let quant_regular = 0
    let quantidade_total = 0

    let soma_idade = 0

    while(idade !== -1){
        if(opiniao === 1){
            soma_idade = soma_idade + idade
            quant_otimo++
        }else if(opiniao === 2){
            quant_bom++
        }else if(opiniao === 3){
            quant_regular++
        }

        quantidade_total++

        idade = Number(input('Sua idade: '))
        if(idade !== -1){
            opiniao = Number(input('Sua opiniâo em relaçao ao filme: '))
        } 
    }

    const percen_de_bom = (quant_bom / quantidade_total) * 100
    const media_idade = soma_idade / quant_otimo

    console.log(`Média das idades das pessoas que responderam ótimo = ${media_idade}`)
    console.log(`Quantidade de pessoas que responderam regula = ${quant_regular}`)
    console.log(`Percentual de pessoas que respondeu bom entre os entrevistados = ${percen_de_bom.toFixed(2)}%`)

}

main()