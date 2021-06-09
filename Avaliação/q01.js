const input = require('prompt-sync')()

function main(){
    console.log(' Situação do cenário da doença COVID-19')

    const media_atual = Number(input('Média de casos atual: '))
    const media_ultimos_14_dias = Number(input('Média de casos há 14 dias: '))


    const diferenca = ( media_atual - media_ultimos_14_dias) / 100

    const cenario = situacao_do_cenario(media_atual, media_ultimos_14_dias)
    console.log(`A variação está em ${diferenca}%, portanto a situação está ${cenario}`)
}

function situacao_do_cenario(media_dia, media_14){

    const diferenca = ( media_dia - media_14 ) / 100

    if(diferenca >= 15){
        return 'Em Alta'
    }else if(diferenca < 15 && diferenca >= 0){
        return 'Em estabilidade'
    }else if(diferenca < 0 ){
        return 'Em queda'
    }
}
main()