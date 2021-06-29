const input = require('prompt-sync')()

function main(){
    const qtd_de_teste = Number(input('Quantidade de testes que vem a seguir: '))
    console.log("   Tipo: 'C', 'R' ou 'S' --------- (R:Rato S:Sapo C:Coelho)")

    saber_qtd_e_tipo(qtd_de_teste)

}


function saber_total_de(cobaias){
    return total = cobaias
}

function saber_percentual(total, animal){
    return (animal / total) * 100
}

function saber_qtd_e_tipo(qtd_de_teste){
    let total_de_cobaias = 0
    let total_coelho = 0
    let total_rato = 0
    let total_sapo = 0

    for(let i = 1; i <= qtd_de_teste; i++){

        let qtd_de_cobais = Number(input('Quantidade de cobaias (máximo 15): '))
        let tipo_de_cobaia = input('Tipo da cobaia: ')

        if(tipo_de_cobaia === 'C'){
            total_coelho += qtd_de_cobais 
        }else if(tipo_de_cobaia === 'R'){
            total_rato += qtd_de_cobais
        }else if(tipo_de_cobaia === 'S'){
            total_sapo += qtd_de_cobais
        }
        
        total_de_cobaias += saber_total_de(qtd_de_cobais)
    }
    const percentual_coelho = saber_percentual(total_de_cobaias, total_coelho)
    const percentual_rato = saber_percentual(total_de_cobaias, total_rato)
    const percentual_sapo = saber_percentual(total_de_cobaias, total_sapo)
    console.log('    ---------------------')

    console.log(`Total: ${total_de_cobaias} cobaias \nTotal de coelhos: ${total_coelho} \nTotal de ratos: ${total_rato} \nTotal de sapos: ${total_sapo}`)
    console.log(`Percentual de coelhos: ${percentual_coelho.toFixed(2)}%`)
    console.log(`Percentual de ratos: ${percentual_rato.toFixed(2)}%`)
    console.log(`Percentual de sapos: ${percentual_sapo.toFixed(2)}%`)
    
}


main()