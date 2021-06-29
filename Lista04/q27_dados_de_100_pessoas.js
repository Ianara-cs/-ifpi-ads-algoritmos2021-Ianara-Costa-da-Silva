const input = require('prompt-sync')()

function main(){
    console.log('Coloque os números de acordo com seu dados')
    console.log('1-Masculino, 2-Feminino. Estado civil:  1-Casado, 2-Solteiro, 3-Divorciado, 4-Viúvo')

    let sexo = Number(input('Qual seu sexo: '))
    let idade = Number(input('Qual sua idade: '))
    let estado_civil = Number(input('Qual seu estado civil: '))

    let quantidade_total = 0
    let quant_mulheres = 0
    let quant_homens = 0

    let mulheres_solteiras = 0
    let homens_solteiros = 0
    
    let quant_acima_30_m = 0 
    let idade_mulheres = 0
    let idade_homens = 0

    while(quantidade_total !== 100){

        if(sexo === 2){
            quant_mulheres++
            idade_mulheres = idade_mulheres + idade

            if(estado_civil === 2){
                mulheres_solteiras++
            }
            if(idade > 30 && estado_civil === 3){
                quant_acima_30_m++
            }
        }else if(sexo === 1){
            quant_homens++
            idade_homens = idade_homens + idade

            if(estado_civil === 2){
                homens_solteiros++
            }
        }
        quantidade_total++
        
        if(quantidade_total !== 100){
            sexo = Number(input('Qual seu sexo: '))
            idade = Number(input('Qual sua idade: '))
            estado_civil = Number(input('Qual seu estado civil: '))
        }
    }

    const percen_homens_solt = (homens_solteiros / quant_homens) * 100
    const percen_mulheres_solt = (mulheres_solteiras / quant_mulheres) * 100
    const media_idade_m = idade_mulheres / quant_mulheres
    const media_idade_h = idade_homens / quant_homens

    console.log(`Média de idade das mulheres = ${media_idade_m}`)
    console.log(`Média de idade dos homens = ${media_idade_h}`)
    console.log(`Percentual de homens solteiros: ${percen_homens_solt.toFixed(2)}%`)
    console.log(`Percentual de mulheres solteiras: ${percen_mulheres_solt.toFixed(2)}%`)
    console.log(`Quantidade de mulheres divorciadas acima de 30 anos: ${quant_acima_30_m} `)

}

main()