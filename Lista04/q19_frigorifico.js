const input = require('prompt-sync')()

function main(){
    console.log('Indentificação do boi mais gordo e mais magro')
    console.log('Para encerrar o programa coloque em Nº de identificaçao 0')
    let num_de_indentificacao = Number(input('Nº de Identificação: '))
    let peso = Number(input('Peso(kg): '))

    let boi_mais_magro = peso
    let boi_mais_gordo = peso

    let num_magro = num_de_indentificacao
    let num_gordo = num_de_indentificacao


    while(num_de_indentificacao !== 0){

        if(boi_mais_gordo > peso){
            boi_mais_gordo = peso
            num_gordo = num_de_indentificacao

        }else if(boi_mais_magro < peso){
            boi_mais_magro = peso
            num_magro = num_de_indentificacao
        }

        num_de_indentificacao = Number(input('Nº de Identificação: '))

        if(num_de_indentificacao !== 0){
            peso = Number(input('Peso(kg): '))

        }else{}

    }

    console.log(`Boi mais gordo - Nº ${num_gordo}, Peso(kg): ${boi_mais_gordo}`)
    console.log(`Boi mais magro - Nº ${num_magro}, Peso(kg): ${boi_mais_magro}`)


}

main()